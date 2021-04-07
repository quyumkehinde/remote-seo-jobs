fetch("https://remotive.io/api/remote-jobs?search=seo&category=marketing")
    .then((res) => res.json())
    .then(function(data){
        jobs = data.jobs;
        let latestDate = data.jobs[0].publication_date;
        latestDate = latestDate.substr(0, 10);
        let monthCode = latestDate.substr(5, 2);
        let month;
        if(monthCode == "01"){
            month = "January;"
        }else if(monthCode == "02"){
            month = "February";
        }else if(monthCode == "03"){
            month = "March";
        }else if(monthCode == "04"){
            month = "April";
        }else if(monthCode == "05"){
            month = "May";
        }else if(monthCode == "06"){
            month = "June";
        }else if(monthCode == "07"){
            month = "July";
        }else if(monthCode == "08"){
            month = "August";
        }else if(monthCode == "08"){
            month = "September"
        }else if(monthCode == "10"){
            month = "October";
        }else if(monthCode == "11"){
            month = "November";
        }else if(monthCode == "12"){
            month = "December";
        }else{

        }
        let day = latestDate.substr(8, 2);
        let year = latestDate.substr(0, 4);
        latestDate = month + " " + day + ", " + year;
        const dateNode = document.getElementsByClassName("date")[0];
        dateNode.innerHTML = dateNode.innerHTML + latestDate;
        jobs.map(job => {
            var company = job.company_name;
            var locate = job.candidate_required_location;
            var date = job.publication_date;
            date = date.substr(0, 10);
            var title = job.title;
            var url = job.url;
            var jobNode = `<div class="jobinfo">
                <p class="company">${company}</p>
                <p class="location">${locate}</p>
                <p class="date">${date}</p>
                <p class="position"><a href="${url}">${title}</a></p>
            </div>`;
            document.querySelector(".jobs").innerHTML = document.querySelector(".jobs").innerHTML + jobNode;
        });
    })
    .catch(function(error){
        console.log(error);
    });