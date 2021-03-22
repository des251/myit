var company = [];
for (var i = 0; i < 5; i++) {
    company[i] = new Object();
}
company[0].name = 'James';
company[0].surname = 'Smith';
company[0].birthDate = {day: 15, month: 11, year: 1990};
company[0].position = 'frontend developer';
company[0].salary = 1000;
company[0].martialStatus = true;

company[1].name = 'Nick';
company[1].surname = 'Brown';
company[1].birthDate = {day: 23, month: 6, year: 1987};
company[1].position = 'backend developer';
company[1].salary = 1100;
company[1].martialStatus = false;

company[2].name = 'Alexa';
company[2].surname = 'Miller';
company[2].birthDate = {day: 16, month: 12, year: 1988};
company[2].position = 'ux/ui designer';
company[2].salary = 800;
company[2].martialStatus = true;

company[3].name = 'Diana';
company[3].surname = 'Davis';
company[3].birthDate = {day: 1, month: 5, year: 1986};
company[3].position = 'sales manager';
company[3].salary = 800;
company[3].martialStatus = true;

company[4].name = 'Edward';
company[4].surname = 'Roberts';
company[4].birthDate = {day: 5, month: 2, year: 1979};
company[4].position = 'general manager';
company[4].salary = 3000;
company[4].martialStatus = true;

function calculateId() {
    for (var i = 0; i < company.length; i++) {
        company[i].id = company[i].birthDate.day * company[i].birthDate.month * company[i].birthDate.year;
    }
}

calculateId();
console.log(company);
