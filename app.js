require('dotenv').config();


const express = require('express');
const path = require('path');





// firing express app
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')))





/* ----------------------------------
.               routes
---------------------------------- */
app.use('/news', require('./routes/newsRoutes'));
/* ----The catch-all handler route */
app.get('*', (req, res, next)=>{
  try {    
    res.sendFile(path.join(__dirname, 'client/build/index.html'))

    
  } catch (err) {
    next(err, req, res)
  }
})





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