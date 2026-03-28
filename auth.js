router.post("/register", async(req,res)=>{

const {email,password} = req.body

const hash = await bcrypt.hash(password,10)

const user = new User({email,password:hash})

await user.save()

res.json({msg:"Registered"})

})