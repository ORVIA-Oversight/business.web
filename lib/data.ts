export type Service = { id:string; name:string; duration:number; price:string; blurb:string; suits:string; active:boolean }
export type Stylist = { id:string; name:string; role:string; specialties:string[] }
export type Booking = { id:string; ref:string; serviceId:string; stylistId:string; date:string; time:string; first:string; last:string; email:string; phone:string; firstVisit:boolean; notes:string; status:'booked'|'checked-in'|'complete'; createdAt:number }

export const services: Service[] = [
  {id:'cut-finish',name:'CUT & FINISH',duration:60,price:'£52',blurb:'A considered cut, finish and practical styling advice.',suits:'Maintenance cuts, shape refinement and everyday wearability.',active:true},
  {id:'restyle',name:'RESTYLE',duration:75,price:'£65',blurb:'More time for a significant change in shape or length.',suits:'Bigger changes where consultation and finish need more room.',active:true},
  {id:'colour-consultation',name:'COLOUR CONSULTATION',duration:30,price:'COMPLIMENTARY',blurb:'A focused conversation before any major colour appointment.',suits:'New colour clients, tonal corrections and significant colour changes.',active:true},
  {id:'full-colour',name:'FULL COLOUR',duration:120,price:'FROM £115',blurb:'Natural, dimensional colour planned around your hair and routine.',suits:'Full colour refreshes and tonal changes.',active:true},
  {id:'highlights',name:'HIGHLIGHTS',duration:150,price:'FROM £135',blurb:'Soft, dimensional lightening with a considered finish.',suits:'Lived-in brightness, face-framing and multi-tonal colour.',active:true},
  {id:'treatment',name:'TREATMENT',duration:30,price:'FROM £25',blurb:'Targeted care to improve feel, manageability and shine.',suits:'Dry, stressed or colour-treated hair.',active:true},
  {id:'styling',name:'STYLING',duration:45,price:'FROM £45',blurb:'Polished styling without the overdone salon finish.',suits:'Events, evenings or simply wanting a really good finish.',active:true}
]

export const stylists: Stylist[] = [
  {id:'ava',name:'AVA MORROW',role:'Founder / Senior Stylist',specialties:['Precision cutting','Natural colour','Restyles']},
  {id:'elise',name:'ELISE NORTH',role:'Colour Specialist',specialties:['Lived-in colour','Highlights','Tonal correction']},
  {id:'frances',name:'FRANCES REED',role:'Stylist',specialties:['Cutting','Styling','Treatments']}
]

export const seedBookings: Booking[] = [
  {id:'seed-1',ref:'MOR-DEMO-1001',serviceId:'cut-finish',stylistId:'ava',date:'TODAY',time:'10:00',first:'Harriet',last:'Cole',email:'demo@example.com',phone:'07000000001',firstVisit:false,notes:'Fictional demonstration record.',status:'booked',createdAt:1},
  {id:'seed-2',ref:'MOR-DEMO-1002',serviceId:'full-colour',stylistId:'elise',date:'TODAY',time:'11:30',first:'Sophie',last:'Reed',email:'demo@example.com',phone:'07000000002',firstVisit:true,notes:'Fictional demonstration record.',status:'booked',createdAt:2},
  {id:'seed-3',ref:'MOR-DEMO-1003',serviceId:'restyle',stylistId:'frances',date:'TODAY',time:'14:00',first:'Maya',last:'Turner',email:'demo@example.com',phone:'07000000003',firstVisit:false,notes:'Fictional demonstration record.',status:'booked',createdAt:3}
]

export const photos = {
  hero:'https://images.unsplash.com/photo-1781450090585-1a511b7066d9?auto=format&fit=crop&q=84&w=2200',
  interior:'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=84&w=2200',
  interior2:'https://images.unsplash.com/photo-1637777277435-3c44f82fd0c9?auto=format&fit=crop&q=84&w=1600',
  interior3:'https://images.unsplash.com/photo-1633681122703-3ce20f1e978d?auto=format&fit=crop&q=84&w=1800',
  owner:'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=84&w=1800',
  phone:'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=84&w=1600',
  finished:'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=84&w=1600',
  stylist:'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=84&w=1600',
  client:'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=84&w=1600',
  detail:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=84&w=1600',
  tools:'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=84&w=1600',
  colour:'https://images.unsplash.com/photo-1605980625600-88c5f0a073d5?auto=format&fit=crop&q=84&w=1600'
}
