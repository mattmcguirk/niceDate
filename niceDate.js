class niceDate {

	constructor(date)
	{
		if(!date) { this.date = new Date(); }
		else { this.date = date }; 
	}

	secondsElapsed()
	{
		return Date.now() - this.date.getTime();
	}			

	elapsed(format) {
		secondsElapsed = Math.floor((Date.now() - this.date.getTime()) / 1000); 
		prettyString = "";
		hourInSeconds = 60 * 60; 

		if(secondsElapsed > hoursInSeconds)
		{
			prettyString += Math.floor(secondsElapsed / hoursInSeconds) + " hours";
		}

	}
}

module.exports = niceDate; 
