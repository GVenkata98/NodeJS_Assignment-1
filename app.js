const {
    myFileWriter, 
    myFileUpdater,  
    myFileReader, 
    myFileDeleter }  = require ("./index");

    myFileWriter("text.txt" , "this is the first Assignment in NodeJS.");
    myFileReader("text.txt");

    myFileUpdater("text.txt" , "this is second line of the first Assignment." );

    myFileDeleter("text.txt");