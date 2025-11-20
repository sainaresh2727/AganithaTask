let Mongoose=require("mongoose")

let Schema=new Mongoose.Schema({
    LongUrl:{
        type:String,
        required:true
    },
     ShortCode:{
        type:String,
        required:true
    },
    Clicks: { 
        type: Number, 
        default: 0 
    },
  LastClicked: { 
    type: Date, 
    default: null 
  },
  CreatedAt: { 
    type: Date, 
    default: Date.now 
}
})

let Model=Mongoose.model("ShortCode",Schema)

module.exports=Model