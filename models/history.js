import mongoose from "mongoose";

const HistorySchema= mongoose.Schema({
    videoId: {type:String,require:true},
    Viewer: {type:String,require:true},
    WatchedOn:{type:Date,default: Date.now}
})

export default mongoose.model('History',HistorySchema)