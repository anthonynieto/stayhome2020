var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Civil War (1861-1865)', '1918 Flu Pandemic', 'Cancer (2019)', 'WWII (1941-1945)', 'AIDS (1987-1997)', 'WWI (1917-1918)', 'COVID-19 (2020)', 'Vietnam War (1955-1975)', 'Korean War (1950-1953)', 'Seasonal Flu (2018-2019)', 'Revolutionary War (1775-1783)'],
        datasets: [{
            label: 'Total Deaths (thousands)',
            backgroundColor: ['#ACACAC', '#212121', '#FC4DEA', '#684913', '#F30707', '#1A48B3', '#E6960A', '#2C970C', '#FCFC24', '#6F00FF', '#A4A2A0'],
            borderColor: 'rgb(255, 99, 132)',
            data: [750, 675, 606.8, 405.4, 302.9, 116.5, 61.6, 58.2, 36.5, 34.2, 31.5]
        }]
    },

    // Configuration options go here
    options: {
    	legend: { 
    		display: false},
    	title: { 
    		display: true,
    		text: 'U.S. Mortality Rate (Thousands)'
    	}
    }
});