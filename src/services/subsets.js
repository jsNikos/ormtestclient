class Subsets{
  calc(set){
    let result = [];
     if(set.length === 1){
       result.push(set);
     } else{
       for(let excl = 0; excl < set.length; excl++){
          let sub = set.filter((elm, idx) => {
            return idx !== excl;
          });
          let subsets = this.calc(sub);
          result.push(subsets, [excl].concat(subsets));
       }
     }
     return result;
  };
}

export default new Subsets();
