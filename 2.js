var btn = document.getElementById("btn");
var input = document.querySelector("#inputfecha");
var text = document.querySelector("#text");

function fecha()
{
    var range = input.value;
    if (validarFecha(range) == 1 || validarFecha(range) == 0)
    {
        return 1;
    }
    else{
        return range;
    }

}

function validarFecha(range)
{
    if (range == "")
    {
        text.textContent = "please put a date";
        console.log("please put a date");
        return 1;
    }
    else{
        if (range.length == 10)
        {
            for (var i = 0; i < range.length; i++) {
                if (range[i] >= 0 && range[i] <= 9) {
                    input.value = "";
                }
                else
                {
                    if(range[i] == "/")
                    {
                        if (range[i-1] >= 0)
                        {
                           if (range[i+1] <= 9)
                           {

                            if (range[i-2] >= 0)
                            {
                                if (range[i+2] <= 9)
                                {
                                        input.value = "";
                                        var day = parseInt(range[0] + range[1]);
                                        var month = parseInt(range[3] + range[4]);
                                        var year = parseInt(range[6] + range[7] + range[8] + range[9]);
                                        if (year >= 1900)
                                        {
                                            if (year <= new Date().getFullYear())
                                            {
                                               var año = validar_año(year);
                                               if (month >= 1 )
                                                {
                                                    if (month <= 12)
                                                    {
                                                     if (day >= 1)
                                                     {
                                                        if (day <= validar_dia(month, año))
                                                        {
                                                        text.textContent = "correct date";
                                                        return range;
                                                        }
                                                        else{
                                                            text.textContent = "incorrect date";
                                                            return 1;
                                                        }
                                                     }
                                                     else{
                                                        text.textContent = "incorrect day";
                                                        return 1;
                                                     }
                                                    }
                                                    else{
                                                        text.textContent = "incorrect month";
                                                        return 1;
                                                    }
                                                }
                                                else
                                                {
                                                    text.textContent = "please put a valid month";
                                                    return 1;
                                                }
                                            }
                                            else{
                                                text.textContent = "incorrect year";
                                            }
                                        }
                                        else{
                                            text.textContent = "please put a valid year";
                                            return 1;
                                        }
                                    }
                                    else
                                    {
                                        text.textContent = "please put a date"; 
                                        return 1;
                                    }
                                }
                                else
                                {
                                    text.textContent = "invalid date"; 
                                    return 1;
                                }
                            }
                            else
                            {
                                text.textContent = "invalid date";
                                return 1;
                            }

                        }
                        else{
                            text.textContent = "invalid date";
                            return 1;
                        }
                    }
                    else{
                        text.textContent = "invalid date";
                        return 1;
                    }
               }
            }
        }
        else{
            text.textContent = "please put a valid date";
            input.value = "";
        }
    }
}

function validar_año(year)
{
    return new Date(year, 1, 29).getDate() === 29;
    
}

function validar_dia(mes, año)
{
    if(mes == 2)
    {
        if (año)
        {
            return 29;
        }
        else
        {
            return 28;
        }
    }
    else{
        if (mes >=7)
        {
            if (mes % 2 == 0)
            {
            return 31;
            }
            else
            {
            return 30;
            }
        }
        else
        {
            if (mes % 2 == 0)
            {
            return 30;
            }
            else
            {
            return 31;
            }
        }
    }
}