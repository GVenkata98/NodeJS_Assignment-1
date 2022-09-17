const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName , fileContent , () =>{
		console.log("New File is Created");
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName , {encoding: "utf-8"} , (err , data) => {
		if(err){console.log(err);}
		else{ console.log(data);}
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName , fileContent , () =>{
		console.log("FileContent is Updated");
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function names
	fs.unlink(fileName, ()  =>{
		console.log("File is Deleted");
	})
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }