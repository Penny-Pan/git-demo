function foo(){
				var name='pan';
				var gender='female';
				var speed='3s';
				return {
					getName:function(){
						return name;
					},
					setName:function(value){
						name=value;
						return name;
					}
				}
			}