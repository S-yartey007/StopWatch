function stopWatch() {
let startTime, endTime,duration = 0, running;

 this.start = function() {
  if(running) {
    throw new Error("stopwatch has already started");
  } else 
        running = true;
       startTime = new Date();
    

 }
 this.stop = function() {
  if(!running) {
    throw new Error("stopwatch has not started");
  } else
       running = false;
        endTime = new Date();
      const seconds = (endTime.getTime() - startTime.getTime())/1000;
      duration += seconds;    
 }
 this.reset = function() {
  startTime = null;
  endTime = null;
  duration = 0;
  running = false;
 }
 Object.defineProperty(this, 'duration', {
  get: function() {
    return duration;
  }
 })

}
  


