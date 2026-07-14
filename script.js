const dob = document.getElementById("dob");
dob.max = new Date().toISOString().split("T")[0];

const calc_btn = document.getElementById("calc_btn");

const output_container = document.getElementById("output_container")
const output_p = document.getElementById("output_p");

const clear_btn = document.getElementById("clear_btn");

calc_btn.onclick = function ()
{
    output_p.classList.add("error");
    output_container.style.display = "block";
    if(dob.value == "")
    {
        output_p.textContent = `Error: Date of Birth not provided`;
        return;
    }

    const date_of_birth = new Date(dob.value);
    const today = new Date();

    if(date_of_birth > today)
    {
        output_p.textContent = `Error: Provided Date of birth is from future`;
        return;
    }

    output_p.classList.remove("error");
    let years = today.getFullYear() - date_of_birth.getFullYear();
    let months = today.getMonth() - date_of_birth.getMonth();
    let days = today.getDate() - date_of_birth.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    output_p.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    
}

clear_btn.onclick = function ()
{
    dob.value = ``;
    output_p.textContent = ``;
    output_p.classList.remove("error");
    output_container.style.display = "none";
}