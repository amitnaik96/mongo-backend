import mongoose from 'mongoose';

// 27015 : docker port bcoz we already have mongoose intalled in 27017
// const mongoUrl : string = 'mongodb://localhost:27015/myDB';  without network(us this link when directly connecting to mongo container)

// connecting from a continaer to another container
const mongoUrl : string = 'mongodb://mongoamit:27017/myDB'; // use mongo internal port (27017)

mongoose.connect(mongoUrl)
    .then(() => console.log(`DB connected`))
    .catch((err) => console.log(`some error ${err}`));

interface IUser {
    name : string,
    age : number,
    email : string
}

const userSchema = new mongoose.Schema<IUser>({
    name : { type : String, required: true},
    age : { type : Number},
    email : {type: String, required : true}
});

export const User = mongoose.model<IUser>('User', userSchema);



