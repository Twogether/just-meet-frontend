export default (io) => {
  io.on('connection', function(client){
    console.log("connected");
    client.on('event', function(data){});
    client.on('disconnect', function(){});
  });
}
