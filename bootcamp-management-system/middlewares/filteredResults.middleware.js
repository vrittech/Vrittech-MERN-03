export const filteredResults = (Model) => async (req, res, next) => {
   try {

      const reqQuery = { ...req.query };

      //Fields to remove
      const removeFields = ['select', 'sort', 'page', 'limit'];

      removeFields.forEach(param => delete reqQuery[param]);

      let queryStr = JSON.stringify(reqQuery);

      queryStr = queryStr.replace(/\b(gt|gte|lt|lte|eq|ne|in)\b/, match => `$${match}`)
      queryStr = JSON.parse(queryStr);
      let appendFilterQuery = Model.find(queryStr);

      // const Models = await Model.find({ title: { $eq: 'Model 1' } });
      // const Models = await Model.find({ description: { $gt: 'Model 1' } });
      // const Models = await Model.find({ title: { $lt: 'Model 1' } });
      // const Models = await Model.find({ title: { $gte: 'Model 1' } });
      // const Models = await Model.find({ title: { $lte: 'Model 1' } });

      //select specific fields
      if (req.query.select) {
         const fields = req.query.select.split(',').join(' ');
         appendFilterQuery = appendFilterQuery.select(fields);
      }

      //sort ascending /descending
      if (req.query.sort) {
         const fields = req.query.sort.split(',').join(' ');
         appendFilterQuery = appendFilterQuery.sort(fields)
      } else {
         appendFilterQuery.sort('-createdAt');
      }

      //Pagination
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      //page -2 ->  (page-1)* limit 120
      //startIndex - page=10 limit=10 
      const skipData = (page - 1) * limit;
      //90 91-100
      // 11 * 10
      const endIndex = page * limit;
      //Previous page -> skip
      // -> 1 * 3 = 3

      appendFilterQuery = appendFilterQuery.skip(skipData).limit(limit);


      const Models = await appendFilterQuery;



      const pagination = {};

      //There is no next page in last page 
      if (endIndex < total) {
         pagination.next = {
            page: page + 1,
            limit
         }
      }
      //There is no previous page in page 1.
      if (skipData > 0) {
         pagination.prev = {
            page: page - 1,
            limit
         }
      }

      if (Models.length > 0) {
         res.filteredResults = {
            status: true,
            data: Models,
            totalDataFetched: Models.length,
            pagination,
            total
         };
         next();
      } else {
         return res.status(400).json({
            status: false,
            message: `No ${Models} found`
         })
      }
   } catch (error) {
      console.log(error);
   }
}