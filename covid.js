var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Revolutionary War (1775-1783)', 'Seasonal Flu (2018-2019)','Korean War (1950-1953)', 'Vietnam War (1955-1975)', 'WWI (1917-1918)','COVID-19 (2020)', 'AIDS Epidemic (1987-1997)', 'WWII (1941-1945)','Cancer (2019)','1918 Flu Pandemic', 'Civil War (1861-1865)'],
        datasets: [{
            label: 'Total Deaths (Thousands)',
            backgroundColor: ['#ACACAC', '#212121', '#33FF99', '#684913', '#1A48B3', '#E6960A', '#F30707', '#2C970C', '#FC4DEA', '#6F00FF', '#E4A8B4'],
            borderColor: 'rgb(255, 99, 132)',
            data: [31.5, 34.2, 36.5, 58.2, 116.5, 222.1, 302.9, 405.4, 606.8, 675, 750]
        }]
    },

    // Configuration options go here
    options: {
    	legend: { 
    		display: false},
    	title: { 
    		display: true,
    		text: 'COVID-19: U.S. Citizen Mortality Rate Comparison Chart (Thousands)'
    	}
    }
});
