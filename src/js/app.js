import '../css/styles.scss';

class Campaign {
  constructor(id, type){
    this.id = id;
    this.type = type
  }
}

class CampaignTrigger extends Campaign {
  constructor(id, type){
    super(id, type);
    this.numbers = [1,2,3,55,66]
    this.names= ['mark', 'anna', 'jane','jane']
    this.groups = [['mark', 'anna'], ['jack', 'eve']]
  }
  showId(){
    //const result = this.numbers.concat([434,123]);
    this.numbers.push(123)
    //const result = this.numbers.filter((el)=>el>4);
    //const result = this.numbers.map(a=>a*2)
    //const result = this.numbers.reverse()
    //const result = this.names.sort();
    //const result = this.numbers.reduce((el, val)=>el+val)
    // let i = 0;
    // const result = this.names.forEach(el=>{
    //   if (el === 'jane'){
    //     return i++
    //   }
    // })
    // //const result = this.groups.reduce((a,b)=>{return a.concat(b)})
    // const start = this.numbers.slice(0,3)
    // const end = this.numbers.slice(3,6)
    // start.reverse();
    // //this.numbers.splice(0,3)
    
    // const result = end.concat(start)
    const lorem = document.getElementById('par').textContent;
    // const nameA = [];
    // const nameJ = [];
    // this.names.forEach(name=>{
    //   if (name.charAt(0)==='a'){
    //     nameA.push(name);
    //   } else if (name.charAt(0)==='j'){
    //     nameJ.push(name);
    //   }
    // })

    // const start = [];
    // const stop = [];
    // this.numbers.forEach(number=>{
    //   if(number > 4){
    //     start.push(number)
    //   } else if(number < 4) {
    //     stop.push(number)
    //   }
    // })
    // const result = start.concat(stop.reverse())
    const counts = {};
    const keys =[];
    const tokensD = lorem.split(/\W+/);
    const tokens = tokensD.filter(token=>{
      if (token !== "") {
        return token;
      }
    })

    const words = tokens.map(token => token.toLowerCase())
    words.map(word=> {
      if(counts[word] === undefined){
        counts[word] = 1;
        keys.push(word);
      } else {counts[word]++}
    })
    keys.sort()
    const res = document.getElementById('res');
    keys.forEach((key,i)=>{
      res.innerHTML += `
      <div class="item item-${i}">${key}: ${counts[key]}</div>`
      }
    )

    

   //console.log(keys)
   console.log(tokens)
  }
}

let compaign = new Campaign('123', 'sms')
let trigger = new CampaignTrigger('123', 'sms');

trigger.showId();

console.log(compaign);
