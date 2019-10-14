/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : All the Logic is writen here.
 *             We can use this logic in any program.
 **/
const input = require('readline-sync');
module.exports = {
    distance(x,y)
    {
        try {
            if(!isNaN(x))
                return (Math.sqrt((x*x)+(y*y))).toFixed(2);
            throw "Not a number";
            
        } catch (error) {
            return error;
            
        }
        
    },

    sumZero(arr,size)
    {
        try {
            if(!isNaN(size))
            {
                for(let i=0;i<size;i++)
                {
                    for(let j=i+1;j<size;j++)
                    {
                        for(let k=j+1;k<size;k++)
                        {
                            if(arr[i]+arr[j]+arr[k]==0)
                            console.log("Element sum to Zero: "+arr[i]+","+arr[j]+","+arr[k]);
                        }
                    }
                }
            }
            else
                throw "Not a number";    
        } catch (error) {
            return error;
        }
    },

    HarmonicNumber(num)
    {
        try {
            if(!isNaN(num))
            {
                var sum=0;
                for(let i=1;i<=num;i++)
                {
                    sum = sum+(1/i);
                }
            return sum;
            }
            throw "Not a number";
        } catch (error) {
            return error;
        }
        
    },

    QuadraticEquation(a,b,c)
    {
        try {
            if(!isNaN(a)||!isNaN(b)||!isNaN(c))
            {
                var delta = Math.abs(b*b-(4*a*c));
                var root1 = (-b+Math.sqrt(delta))/(2*a);
                var root2 = (-b-Math.sqrt(delta))/(2*a);
            
                var obj = {
                    root1: root1.toFixed(2),
                    root2: root2.toFixed(2)
                };
            return obj;
            }
            throw "Not a number";
        } catch (error) {
            return error;
        }
        
    },

    LeapYear(year)
    {
        try {
            if(!isNaN(a)||!isNaN(b)||!isNaN(c))
            {
                var delta = Math.abs(b*b-(4*a*c));
                var root1 = (-b+Math.sqrt(delta))/(2*a);
                var root2 = (-b-Math.sqrt(delta))/(2*a);
            
                var obj = {
                    root1: root1.toFixed(2),
                    root2: root2.toFixed(2)
                };
            return obj;
            }
            throw "Not a number"; 
        } catch (error) {
            return error;
        }
    },

    CoinFlip(times)
    {
        /** count:   This variable is for counting how many times u want to flip the coin.
         *  head :   This variable is for counting times of head occure.
         *  tail:    This variable is for counting times of tails occure. 
         *  times:   No. of times u want to flip the coin.
         *  ran:     This is used to store random function  
         **/
        try {
            if(!isNaN(times))
            {
                var count = 0,head=0,tail=0;    
                while(times!=count)
                {
                    var ran = Math.floor(Math.random() *2);
                    if(ran==0)
                        head++;
                    else
                        tail++;
                    count++;
                }
                var obj = {
                    headper: ((head/times)*100),
                    tailper: ((tail/times)*100)
                };
                return obj;
            }
            throw "Not a number";
            
        } catch (error) {
            return error
        }
        
    },

    PowOf2(pow)
    {
        try {
            if(!isNaN(pow))
            {
                var arr = [],j=0;
                if(pow<=31)
                {
                    for(let i=1;i<=pow;i++)
                    {
                        arr[j++] = (Math.pow(2,i));
                    }
                }
                return arr;
            }
                throw "Not a number";
        } catch (error) {
            return error;
        }
    },

    WindChill(fer,speed)
    {
        try {
            if(!isNaN(fer)&&!isNaN(speed))
            {
                if(fer<=50&&speed>=3&&speed<=120)
                {
                    return (35.75+0.6215*fer+((0.4275*fer)-35.75)*Math.pow(speed,0.16));
                }
            }
                throw "Enter valid Input: ";
        } catch (error) {
            return error;
        }
    },

    Gambler(stack,Goal,Times)
    {
        try {
            if(!isNaN(stack)&&!isNaN(Goal)&&!isNaN(Times))
            {
                var beat=0,win=0;
                for(let i=0;i<Times;i++)
                {
                    var cash = stack;
                    while(cash>0&&cash<Goal)
                    {
                        beat++;
                        if(Math.random()<0.5)
                            cash++;
                        else
                            cash--;
                    }
                    if(cash==Goal)
                        win++;
                }
                var obj = {
                    perWin :(win/Times)*100,
                    perLoos :((Times-win)/Times)*100,
                    win: win
                };
                return obj;
            }
            throw "Enter Valid Input";
        } catch (error) {
            return error;
        }  
    },

    BubbleSortStr(str)
    {
        try {
            if(typeof str == "string")
            {
                var s = str.split("");
                var temp;
                for(let i=0;i<s.length;i++)
                {
                    for(let j=i+1;j<s.length;j++)
                    {
                        if(s[i]>s[j])
                        {
                            temp = s[i];
                            s[i] = s[j];
                            s[j] = temp;
                        }
                    }
                }
                return s.join("");
            }
            throw "Enter valid Input"; 
        } catch (error) {
            return error;
        }
    },

    BubbleSortInt(arr)
    {
        try {
            if(arr!=null)
            {
                var temp=0;
                for(let i=0;i<arr.length;i++)
                {
                    for(let j=i+1;j<arr.length;j++)
                    {
                        if(arr[i]>arr[j])
                        {
                            temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }
                return arr;
            }
            throw "array is Empty";
        } catch (error) {
            return error;
        }
        
    },

    BubbleSortIntRev(arr)
    {
        try {
            if(arr!=null)
            {
                var temp=0;
                for(let i=0;i<arr.length;i++)
                {
                    for(let j=i+1;j<arr.length;j++)
                    {
                        if(arr[i]<arr[j])
                        {
                            temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }
                return arr;
            }
            throw "array is Empty";
        } catch (error) {
            return error;
        }
    },

    isPrime(num)
    {
        try {
            if(!isNaN(num))
            {
                var count = 0;
                for(let i=1;i<=num;i++)
                {
                    if(num%i==0)
                        count++;
                }
                if(count==2)
                    return true;
                else   
                    return false;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    isPalindrom(num)
    {
        try {
            if(!isNaN(num))
            {
                var rem=0,rev=0;
                var ori = num;
                while(num!=0)
                {
                    rem = num%10;
                    rev = rev*10+rem;
                    num = parseInt(num/10);
                }
                if(ori==rev)
                    return true;
                else
                    return false;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    isAnagram(str1,str2)
    {
        try {
            if(str1!=null&&str2!=null)
            {
                var s = this.BubbleSortStr(str1);
                var s1 = this.BubbleSortStr(str2);
                return s===s1;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    BinarySearch(arr,search)
    {
        try {
            if(arr!=null)
            {
                var arr = this.BubbleSortInt(arr);
                var l=0,h = arr.length,mid=0,count=0;
                while(l<=h)
                {
                    mid = parseInt((l+h)/2);
                    if(arr[mid]==search)
                    {
                        count++;
                        return "Element found: ";
                    }
                    else
                    {
                        if(arr[mid]<search)
                            l=mid+1;
                        else
                            h=mid-1;
                    }
                }
                if(count==0)
                    return "Element not found: ";
            }
            throw "Enter valid Input";
        } catch (error) {
                return error;
            }
        
    },

    DayOfWeek(Day,Month,Year)
    {
        try {
            if(!isNaN(Day)&&!isNaN(Month)&&!isNaN(Year))
            {
                var str = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];       
                var Yo = Year-parseInt((14-Month)/12);
                var x = Yo+parseInt(Yo/4)-parseInt(Yo/100)+parseInt(Yo/400);
                var Mo = Month+12*(parseInt((14-Month)/12)-2);
                var Do = (Day+x+parseInt(31*Mo/12))%7;
                var obj = {
                    dayStr: str[Do],
                    dayNum: Do
                };
                return obj;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    toBinary(num)
    {
        try {
            if(!isNaN(num))
            {
                var rem=0,i=1,bin=0;
                while(num!=0)
                {
                    rem = num%2;
                    bin = bin+rem*i;
                    num = parseInt(num/2);
                    i=i*10;
                }
                return bin;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    toDecimal(bin)
    {
        try {
            if(!isNaN(bin))
            {
                var rem=0,sum=0,i=0;
                while(bin!=0)
                {
                    rem = bin%10;
                    sum = sum+rem*Math.pow(2,i);
                    bin = parseInt(bin/10);
                    i++;
                }
                return sum;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    VendingMachine(money)
    {
        try {
            if(!isNaN(money))
            {
                var note = [1000,500,100,50,20,10,5,2,1];
                var no=0,count=0,sub=0;
                for(let i=0;i<note.length;i++)
                {
                    no = parseInt(money/note[i]);
                    if(no>0)
                        console.log("Total number of "+note[i]+" notes - "+no);
                    count+=no;
                    sub = no*note[i];
                    money = money-sub;
                }
                return "Total number of notes: "+count;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
        
    },

    Username(name)
    {
        try {
            if(typeof name == "string")
            {
                if(name.length>=3)
                {
                    return ("Hello "+name+", How are you?");
                }
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    Array2D(mat,row,col)
    {
        try {
            if(!isNaN(row)&&!isNaN(col))
            {
                console.log("Here is your matrix: ");
                for(let i=0;i<row;i++)
                {
                    for(let j=0;j<col;j++)
                    {
                        process.stdout.write(`${mat[i][j]}`+"   ");
                    }
                    console.log("");
                }
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    BinaryNibble(num)
    {
        try {
            if(!isNaN(num))
            {
                var bin = this.toBinary(num);
                var str = bin.toString();
                var count = 0,firstStr="0",secStr="";
                for(let i=0;i<str.length;i++)
                {
                    if(count!=3)
                    {
                        firstStr += str.charAt(i);
                        count++;
                    }
                    else
                        secStr += str.charAt(i);

                }
                var finStr = secStr+firstStr;
                finStr = parseInt(finStr);
                return this.toDecimal(finStr)
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    Payment(P,Y,R)
    {
        try {
            if(!isNaN(P)&&!isNaN(Y)&&!isNaN(R))
            {
                var n = 12*Y;
                var r = R/(12*100);
                var v = P*r;
                var den = 1-Math.pow((1+r),(-n));
                return v/den;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    factorial(num)
    {
        try {
            if(!isNaN(num))
            {
                var fact=1;
                for(let i=1;i<=num;i++)
                {
                    fact = fact*i;
                }
                return fact;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    countBST(num)
    {
        try {
            if(!isNaN(num))
            {
                var fact1 = this.factorial(2*num);
                var fact2 = (this.factorial(num+1)*this.factorial(num));
                return fact1/fact2;
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    countBt(num)
    {
        try {
            if(!isNaN(num))
            {
                return this.countBST(num)*this.factorial(num);
            }
            throw "Enter valid Input";
        } catch (error) {
            return error;
        }
    },

    Matrix(row, col)
    {
        try {
            if(!isNaN(row)&&!isNaN(col))
            {
                var Arr = new Array(row);
                for(let i=0;i<row;i++)
                {
                    Arr[i] = new Array(col);
                }
                return Arr;
            }
            throw "Enter a valid input";
        } catch (error) {
            return error;
        } 
    },
    
    MatrixPrint(row,col,arr)
    {
        try {
            if(arr!=null)
            {
                for(let i=0;i<row;i++)
                {
                    for(let j=0;j<col;j++)
                    {
                        if(arr[i][j] != undefined)
                            process.stdout.write(arr[i][j]+" ");
                        else
                            process.stdout.write("");
                            
                    }
                    console.log("");
                }
            }
            throw "Array should not be empty:";
        } catch (error) {
            return error;
        }
    },

    ReadFile(path)
    {
        const fs = require('fs');
        var hold = fs.readFileSync(path,'utf8');
        hold = JSON.parse(hold);
        return hold;
    },

    WriteJsonFile(path,obj)
    {
        var json = JSON.stringify(obj);
        var fs = require('fs');
        fs.writeFile(path,json,(err)=>{
            if (err) throw err;
        })
    },

    removeInArray(arr,index)
    {
        var arr1 = [];
        var k=0;
        for(let i=0;i<arr.length;i++)
        {
            if(i!=index)
                arr1[k++] = arr[i];
        }
        return arr1;
    }
}