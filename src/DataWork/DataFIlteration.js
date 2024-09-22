const FilterByUser = (tickets)=>{
    const myMap = new Map();
 
    for(let i=0; i<tickets.length; i++){
         const userId = tickets[i].userId;
 
         if (!myMap.has(userId)) {
             myMap.set(userId, []);  
         }
         myMap.get(userId).push(tickets[i]);
    }
 
   return myMap;
 }  
 
 
 
 const FilterByPriority = (tickets) => {
     const myMap = new Map();
     for(let i=0; i<tickets.length; i++){
         const priority = tickets[i].priority;
 
         if (!myMap.has(priority)) {
             myMap.set(priority, []);  
         }
         myMap.get(priority).push(tickets[i]);
    }
 
   return myMap;
 }
 
 const FilterByStatus = ( tickets )=>{
     const myMap = new Map();
 
    for(let i=0; i<tickets.length; i++){
         const status = tickets[i].status;
 
         if (!myMap.has(status)) {
             myMap.set(status, []);  
         }
         myMap.get(status).push(tickets[i]);
    }
 
   return myMap;
 }
 