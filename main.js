function reverseStr(str)
{
    var listOfChars = str.split('');// ['h','e']
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;

}

function isPalindrome(str)
{
    var reverse= reverseStr(str);
    return str===reverse;
}

function convertDateToString(date)
{
    var dateStr= { day:'',month:'',year:''};

    if(date.day <10)
    {
        dateStr.day=date.day +'0';
    }
    else{
        dateStr.day=date.day.toString();
    }
    if(date.month <10)
    {
        dateStr.month=date.month +'0';
    }
    else{
        dateStr.month=date.month.toString();
    }
    if(date.year <10)
    {
        dateStr.year=date.year +'0';
    }
    else{
        dateStr.year=date.year.toString();
    }
    


}