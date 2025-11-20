require("dotenv").config()

let Express=require("express")
let App=Express()
let Cors=require("cors")

App.use(Express.json())
App.use(Cors())

let Db=require("./Db/Db")
Db()


App.get('/',async (req,res) => {
    res.json("Hello")
})
let UrlModel=require("./Model/Model")

function ValidateUrl(url){
    try{
      new URL(url)
      return true
    }
    catch(err){
      return false
    }
  }

App.post('/api/UrlDatas',async (req,res) => {
    let {LongUrl,ShortCode}=req.body
    try{
        if(!ValidateUrl(LongUrl)){
            return res.status(404).json({
                success:false,
                message:"Invalid Url"
            })
        }
        if(!/^[A-Za-z0-9]{10,20}$/.test(ShortCode)){
            return res.status(400).json({
                success:false,
                message:"Code Must Be 6-8 Characters"
            })
        }
        let ExisitingCode=await UrlModel.findOne({ShortCode})
        if(ExisitingCode){
            return res.status(409).json({
                success:false,
                message:"Code Already Exists"
            })
        }
        let UrlDatassave=new UrlModel({LongUrl,ShortCode})
        await UrlDatassave.save()
        res.status(200).json({
            success:true,
            message:"Url Shorted",
        })
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:`ErrorName:${err.name} ErroeMessage:${err.message}`
        })
    }
})

//GETTING DATA
App.get('/api/GetUrlData',async (req,res) => {
    try{
        let GetUrl=await UrlModel.find()
        res.status(200).json({
            success:true,
            data:GetUrl
        })
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:`ErrorName:${err.name} ErrorMessage:${err.message}`
        })
    }
})

App.get('/:Code',async (req,res) => {
    let {Code}=req.params
    let RedirectLink=await UrlModel.findOne({ShortCode:Code})

    RedirectLink.Clicks += 1;
    RedirectLink.LastClicked = new Date();
    await RedirectLink.save();

    res.redirect(RedirectLink.LongUrl)
})



App.delete('/api/DeleteUrl/:Code', async (req, res) => {
  let { Code } = req.params;

  let deleted = await UrlModel.findOneAndDelete({ ShortCode: Code });

  if (!deleted) {
    return res.status(404).json({ 
        success: false, 
        message: "Code Not Found" 
    });
  }

  res.json({ 
    success: true, 
    message: "Link Deleted Successfully" 
    });
    });


App.listen(process.env.PORT,()=>{
    console.log("Server Running Successfully");
    
})