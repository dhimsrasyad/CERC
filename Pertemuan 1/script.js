const linkData =()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/2/comments')
    .then(res=>{
      console.log(res.data.length);
      for(let i =0; i<res.data.length;i++){
                const comment=res.data[i];
                console.log(`${i+1}. ${comment.body}`);
            }

    })
    console.log("Dhimas");
}
linkData();

const linkAja =()=> {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res=>{
    const filterData = res.data.filter(value =>{
      return value.userId == 8;
    });
    console.log(filterData);
  })
}
linkAja();
