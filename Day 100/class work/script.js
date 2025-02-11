const myAsyncFunction = async () => {
    console.log("დროის დაწყება");
  
    // await-ით ველოდები setTimeout-ს
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2000 მილიწამი (2 წამი)
  
    console.log("დროის გასვლის შემდეგ");
  };
  
  myAsyncFunction();
  