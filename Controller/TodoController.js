

const Todoschema=require('../Model/TodoSchema');
const userinfo=require('../Model/UserInfo');
const Tododata=Todoschema.data;
const userInfo=userinfo.useinfo;
const JWt = require('jsonwebtoken');

const JWTKey='shhhh'




exports.SinupTodo = async (req, res) => {

    try {
        const Product = new userInfo(req.body);
        let result = await Product.save();
        result = result.toObject();
        delete result.password;
        if (Product) {
            JWt.sign({ result },JWTKey , { expiresIn: '2h' }, (err, token) => {
                if (err) {
                    res.send({ result: "something went wrong" })
                }
                res.send({ result, auth: token })
            })
        }
    }
    catch (err) {
        res.send(err.message);
    }
}



exports.Loginuser = async (req, res) => {
    if (req.body.email && req.body.password) {
        const User = await userInfo.findOne(req.body).select("-password");
        if (User) {
            JWt.sign({ User }, JWTKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    res.send({ result: "something went wrong" })
                }
                res.send({ User, auth: token })
            })

          

        }
        else {
            res.send({ result: 'user not found' })
        }
    }
    else {
        console.log('you are not right a correct emial& password')
        res.send("you are not right a correct emial& password")
    }






}





exports.createTodo=  (req,res)=>{

    const data= new Tododata(req.body);
    res.send(data);
    data.save();
}

exports.getTodo=async (req,res)=>{
    const data=await Tododata.find({});
    res.send(data);

}

exports.deleteTodo=async(req,res)=>{
    const id=req.params.id;
    let data=await Tododata.findByIdAndDelete({_id:id});
    res.send(data);
}




exports.updateTodo=async (req,res)=>{
    const id=req.params.id;
    let data=await Tododata.updateOne({_id:id},
        {$set:req.body}
    )
    res.send(data);
}


exports.getUpdateProduct= async (req,res)=>{
    let id=req.params.id;
    const result= await Tododata.findOne({_id:id});
  
    if(result){
        res.send(result);
    }
    else{
        res.send("user is not find")
    }

}


exports.searchProduct= async(req,res)=>{
    const key=req.params.key;

    const data= await Tododata.findOne({
        "$or":[
          { firstName:{$regex:req.params.key} },
          {lastName:{$regex:req.params.key}},
        ]
    })
    

    if(data){
        res.send(data);
    }
    else{
        res.send("data was not found")
    }

    
}


