require('dotenv').config();


const express = require('express');





// firing express app
const app = express();
app.use(express.json());





/* ----------------------------------
.               routes
---------------------------------- */
app.use('/news', require('./routes/newsRoutes'));






// -----------errors handling
app.use((err, req, res)=>{
  console.log(err);
  res.json({ msg: `Server Error!`, error: err.message });
})








// ----------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})