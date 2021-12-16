class niceDate {

	constructor(date)
	{
		if(!date) { this.date = new Date(); }
		else { this.date = date }; 
	}

	seconds()
	{
		return Math.floor((Date.now() - this.date.getTime()) / 1000); 
	}

	formattedDate()
	{
		let formattedString = ""; 
		let seconds = this.seconds();

		if(seconds > (60*60*24)) // at least one day
		{
			days = Math.floor(seconds / (60*60*24))
			if(days > 1) { formattedString += `${days} days `; }
			else { formattedString += `${days} day `}
			
			seconds -= (days*60*60*24); 
		}

		if(seconds > (60*60)) // at least one hour
		{
			hours = Math.floor(seconds / (60*60))
			formattedString += `${hours}:`;
			seconds -= (hours*60*60);
		}
		else { formattedString += "00:"}

		if(seconds > (60)) // at least one minute
		{
			minutes = Math.floor(seconds / (60))
			if(minutes > 9) { formattedString += `${minutes}`; }
			else { formattedString += `0${minutes}`; }
			seconds -= (minutes*60);
		}
		else { formattedString += "00"}

		return(formattedString);
	}
}

module.exports = niceDate; 
