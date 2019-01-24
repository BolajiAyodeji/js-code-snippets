let role = 'admin'; 

switch (role) {
  case 'guest':
   console.log('Guest User'); 
  break; 
  case 'admin':
   console.log('Administrator'); 
  break; 
  case 'mod':
   console.log('Moderator'); 
  break; 
  default:
   console.log('Unknown User'); 
}
