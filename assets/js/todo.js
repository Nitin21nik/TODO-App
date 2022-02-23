var labelName=document.getElementsByClassName('labelName');
for(var i=0;i<labelName.length;i++)
{
    if(labelName[i].innerText=="work")
    {
        labelName[i].style.backgroundColor='blue';
        labelName[i].style.color='white';
    }
    else if(labelName[i].innerText=="school")
    {
        labelName[i].style.backgroundColor='purple';
        labelName[i].style.color='white';
    }

    else if(labelName[i].innerText=="cleaning")
    {
        labelName[i].style.backgroundColor='green';
        labelName[i].style.color='white';
    }

    else if(labelName[i].innerText=="personal")
    {
        labelName[i].style.backgroundColor='red';
        labelName[i].style.color='white';
    }

    else{
        labelName[i].style.backgroundColor='black';
        labelName[i].style.color='white';
    }
}


