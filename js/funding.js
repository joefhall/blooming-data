fundingCurrentData = {
  type: null,
  name: null,
  data: {}
};

fundingDataTypes = ['funder', 'theme'];

fundingThemes = {
  asylum: 'Asylum seekers and refugees',
  children: 'Children and young people',
  disabled: 'Disabled people',
  elderly: 'Older people',
  ethnic: 'Ethnic minorities',
  women: 'Women'
};

function getRandomFundingData() {
  fundingCurrentData.type = fundingDataTypes[Math.round(Math.random())];
  
  switch (fundingCurrentData.type) {
    case 'funder':
      fundingCurrentData.name = getRandomFunder();
      fundingCurrentData.data = getFundingByFunder(fundingCurrentData.name);
      break;
    case 'theme':
      fundingCurrentData.name = getRandomTheme();
      fundingCurrentData.data = getFundingByTheme(fundingCurrentData.name);
      break;
  }
}

function getAllFunders() {
  for (var i = 0; i < funding.length; i++) {
    if ($.inArray(funding[i].org, funders) === -1) {
      funders.push(funding[i].org);
    }
  }
  
  funders.sort();
}

function getAllThemes() {
  for (var i = 0; i < funding.length; i++) {
    if ($.inArray(funding[i].theme, themes) === -1) {
      themes.push(funding[i].theme);
    }
  }
  
  themes.sort();
}

function getRandomFunder() {
  return funders[Math.floor(Math.random() * funders.length)];
}

function getRandomTheme() {
  return themes[Math.floor(Math.random() * themes.length)];
}

function getFundingByFunder(funder) {
  funderResults = {};
  
  for (var i = 0; i < funding.length; i++) {
    if (funding[i].org === funder) {
      funderResults[fundingThemes[funding[i].theme]] = funding[i].amount;
    }
  }
  
  return funderResults;
}

function getFundingByTheme(theme) {
  themeResults = {};
  
  for (var i = 0; i < funding.length; i++) {
    if (funding[i].theme === theme) {
      themeResults[funding[i].org] = funding[i].amount;
    }
  }
  
  return themeResults;
}

funding = [
  { org: "Essex Community Foundation", amount: 4000, theme: "asylum" },
  { org: "Oxfordshire Community Foundation", amount: 4880, theme: "asylum" },
  { org: "Quartet Community Foundation", amount: 62300, theme: "asylum" },
  { org: "Scottish Council For Voluntary Organisations", amount: 8915, theme: "asylum" },
  { org: "The Big Lottery Fund", amount: 352828, theme: "asylum" },
  { org: "The Tudor Trust", amount: 30000, theme: "asylum" },
  { org: "The Wellcome Trust", amount: 154925, theme: "asylum" },
  { org: "Cheshire Community Foundation", amount: 13682, theme: "children" },
  { org: "Co-operative Group", amount: 19138.06, theme: "children" },
  { org: "Comic Relief", amount: 1419256, theme: "children" },
  { org: "Community Foundation for Surrey", amount: 5800, theme: "children" },
  { org: "Esmée Fairbairn Foundation", amount: 240000, theme: "children" },
  { org: "Essex Community Foundation", amount: 35557, theme: "children" },
  { org: "Lloyds Bank Foundation for England and Wales", amount: 30000, theme: "children" },
  { org: "London Borough of Barnet", amount: 2500, theme: "children" },
  { org: "London Councils", amount: 1873776, theme: "children" },
  { org: "Oxfordshire Community Foundation", amount: 29019, theme: "children" },
  { org: "Quartet Community Foundation", amount: 52089, theme: "children" },
  { org: "R S Macdonald Charitable Trust", amount: 5000, theme: "children" },
  { org: "Road Safety Trust", amount: 105592, theme: "children" },
  { org: "The Big Lottery Fund", amount: 8480340, theme: "children" },
  { org: "The Blagrave Trust", amount: 120000, theme: "children" },
  { org: "The Clothworkers Foundation", amount: 15000, theme: "children" },
  { org: "The Tudor Trust", amount: 112000, theme: "children" },
  { org: "The Wellcome Trust", amount: 449013, theme: "children" },
  { org: "Virgin Money Foundation", amount: 146097, theme: "children" },
  { org: "Woodward Charitable Trust", amount: 500, theme: "children" },
  { org: "ZING", amount: 15000, theme: "children" },
  { org: "Cheshire Community Foundation", amount: 8737, theme: "disabled" },
  { org: "Co-operative Group", amount: 16990.26, theme: "disabled" },
  { org: "Community Foundation for Surrey", amount: 4000, theme: "disabled" },
  { org: "Essex Community Foundation", amount: 47907, theme: "disabled" },
  { org: "Heart Of England Community Foundation", amount: 3000, theme: "disabled" },
  { org: "Lloyds Bank Foundation for England and Wales", amount: 178385, theme: "disabled" },
  { org: "London Councils", amount: 593776, theme: "disabled" },
  { org: "Oxfordshire Community Foundation", amount: 19937, theme: "disabled" },
  { org: "Quartet Community Foundation", amount: 18942, theme: "disabled" },
  { org: "R S Macdonald Charitable Trust", amount: 5000, theme: "disabled" },
  { org: "Road Safety Trust", amount: 62908, theme: "disabled" },
  { org: "Scottish Council For Voluntary Organisations", amount: 10000, theme: "disabled" },
  { org: "Sport England", amount: 20000, theme: "disabled" },
  { org: "The Big Lottery Fund", amount: 3878361, theme: "disabled" },
  { org: "The Clothworkers Foundation", amount: 15000, theme: "disabled" },
  { org: "The Wellcome Trust", amount: 675064, theme: "disabled" },
  { org: "Two Ridings Community Foundation", amount: 1000, theme: "disabled" },
  { org: "Woodward Charitable Trust", amount: 500, theme: "disabled" },
  { org: "Cheshire Community Foundation", amount: 6050, theme: "elderly" },
  { org: "Co-operative Group", amount: 20956.6, theme: "elderly" },
  { org: "Community Foundation for Surrey", amount: 3344, theme: "elderly" },
  { org: "Essex Community Foundation", amount: 27486, theme: "elderly" },
  { org: "Heart Of England Community Foundation", amount: 1000, theme: "elderly" },
  { org: "Oxfordshire Community Foundation", amount: 25943, theme: "elderly" },
  { org: "Quartet Community Foundation", amount: 8625, theme: "elderly" },
  { org: "Road Safety Trust", amount: 62908, theme: "elderly" },
  { org: "Scottish Council For Voluntary Organisations", amount: 88190, theme: "elderly" },
  { org: "The Big Lottery Fund", amount: 1488393, theme: "elderly" },
  { org: "The Wellcome Trust", amount: 984737, theme: "elderly" },
  { org: "Virgin Money Foundation", amount: 146097, theme: "elderly" },
  { org: "Co-operative Group", amount: 4770.97, theme: "ethnic" },
  { org: "Comic Relief", amount: 348050, theme: "ethnic" },
  { org: "Heart Of England Community Foundation", amount: 69150, theme: "ethnic" },
  { org: "Lankelly Chase Foundation", amount: 112500, theme: "ethnic" },
  { org: "London Councils", amount: 8537860, theme: "ethnic" },
  { org: "Oxfordshire Community Foundation", amount: 9436, theme: "ethnic" },
  { org: "Quartet Community Foundation", amount: 3500, theme: "ethnic" },
  { org: "Scottish Council For Voluntary Organisations", amount: 9990, theme: "ethnic" },
  { org: "The Big Lottery Fund", amount: 546826, theme: "ethnic" },
  { org: "The Tudor Trust", amount: 135000, theme: "ethnic" },
  { org: "The Wellcome Trust", amount: 162490, theme: "ethnic" },
  { org: "Barrow Cadbury Trust", amount: 31320, theme: "women" },
  { org: "Co-operative Group", amount: 3193.53, theme: "women" },
  { org: "Comic Relief", amount: 348050, theme: "women" },
  { org: "Essex Community Foundation", amount: 750, theme: "women" },
  { org: "Heart Of England Community Foundation", amount: 69150, theme: "women" },
  { org: "London Catalyst", amount: 2500, theme: "women" },
  { org: "London Councils", amount: 7574728, theme: "women" },
  { org: "Oxfordshire Community Foundation", amount: 12130, theme: "women" },
  { org: "Quartet Community Foundation", amount: 9087, theme: "women" },
  { org: "Scottish Council For Voluntary Organisations", amount: 18915, theme: "women" },
  { org: "The Big Lottery Fund", amount: 2913558, theme: "women" },
  { org: "The Tudor Trust", amount: 30000, theme: "women" },
  { org: "The Wellcome Trust", amount: 2467788, theme: "women" },
  { org: "Virgin Money Foundation", amount: 15658, theme: "women" },
];

funders = [];
themes = [];
getAllFunders();
getAllThemes();

$(document).ready(function() {
  for (var i = 0; i < funders.length; i++) {
    $('#funders').append($('<option>', {
      value: funders[i],
      text: funders[i]
    }));
  }
  
  for (var j = 0; j < themes.length; j++) {
    $('#themes').append($('<option>', {
      value: themes[j],
      text: fundingThemes[themes[j]].toLowerCase()
    }));
  }
  
  $('select').niceSelect();
});
