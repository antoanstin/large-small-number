 var a=[3,657,57,56,644,2,464,464646,646];
	 var b=a[0];
	 var c=a[0];
	for(i=0;i<a.length;i++)
	{
		if(a[i]<b)
		{
		b=a[i];
		}
		if(a[i]>c)
		{
			c=a[i];
		}		
	}		
		document.write(b+ "<br>" +c);
		
		
		 var a=[2,1,3];
	 var b=a[0];	 
	for(i=0;i<a.length;i++)
	{
		if(a[i]<b)
		{
		b=a[i];
		}	
	}		
		document.write(b);
		
		
		
		var a=[2,1,3];
		var b=a[0];
		for(i=0;i<a.length;i++)
		{
		if(a[i]>b)
		{
			b=a[i];
		}
		}
		document.write(b);
	
		var a=[3,5,6,78]
		var b=a[0];
		var i=0
		while(i<a.length)
		{
			i++;
			if(a[i]<b)
			
			{
			b=a[i];	
			}
		}
		document.write(b);