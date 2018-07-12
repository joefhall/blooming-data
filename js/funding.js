fundingCurrentData = {
  type: null,
  name: null,
  data: {}
};

fundingDataTypes = ['funder', 'theme'];

fundingThemes = {
  asylum: 'Refugees and asylum seekers',
  children: 'Children',
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

function getRandomFunder() {
  var funders = [];
  
  for (var i = 0; i < funding.length; i++) {
    if ($.inArray(funding[i].org, funders)) {
      funders.push(funding[i].org);
    }
  }
  
  return funders[Math.floor(Math.random() * funders.length)];
}

function getRandomTheme() {
  var themes = [];
  
  for (var i = 0; i < funding.length; i++) {
    if ($.inArray(funding[i].theme, themes)) {
      themes.push(funding[i].theme);
    }
  }
  
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
  { org: "A B Charitable Trust", amount: 527500, theme: "asylum" },
  { org: "Barrow Cadbury Trust", amount: 681000, theme: "asylum" },
  { org: "Cheshire Community Foundation", amount: 19858, theme: "asylum" },
  { org: "City Bridge Trust", amount: 302400, theme: "asylum" },
  { org: "Co-operative Group", amount: 39209.48, theme: "asylum" },
  { org: "Comic Relief", amount: 1005908, theme: "asylum" },
  { org: "Community Foundation for Surrey", amount: 1200, theme: "asylum" },
  { org: "Community Foundation serving Tyne & Wear and Northumberland", amount: 22433, theme: "asylum" },
  { org: "Corra Foundation", amount: 2000, theme: "asylum" },
  { org: "Esmée Fairbairn Foundation", amount: 1769510, theme: "asylum" },
  { org: "Essex Community Foundation", amount: 24407, theme: "asylum" },
  { org: "Heart Of England Community Foundation", amount: 21253.55, theme: "asylum" },
  { org: "Indigo Trust", amount: 0, theme: "asylum" },
  { org: "Joseph Rowntree Charitable Trust", amount: 64817, theme: "asylum" },
  { org: "Joseph Rowntree Foundation", amount: 5000, theme: "asylum" },
  { org: "Lloyds Bank Foundation for England and Wales", amount: 1528423, theme: "asylum" },
  { org: "London Catalyst", amount: 19100, theme: "asylum" },
  { org: "Oxford City Council", amount: 10074, theme: "asylum" },
  { org: "Oxfordshire Community Foundation", amount: 116388, theme: "asylum" },
  { org: "Quartet Community Foundation", amount: 165298, theme: "asylum" },
  { org: "Scottish Council For Voluntary Organisations", amount: 28384.99, theme: "asylum" },
  { org: "Somerset Community Foundation", amount: 5000, theme: "asylum" },
  { org: "Sport England", amount: 158233, theme: "asylum" },
  { org: "Staples Trust", amount: 6500, theme: "asylum" },
  { org: "Tedworth Charitable Trust", amount: 5000, theme: "asylum" },
  { org: "The Big Lottery Fund", amount: 7854060, theme: "asylum" },
  { org: "The Clothworkers Foundation", amount: 15000, theme: "asylum" },
  { org: "The Henry Smith Charity", amount: 466300, theme: "asylum" },
  { org: "The Robertson Trust", amount: 7000, theme: "asylum" },
  { org: "The Tudor Trust", amount: 978500, theme: "asylum" },
  { org: "The Wellcome Trust", amount: 981234, theme: "asylum" },
  { org: "Tuixen Foundation", amount: 0, theme: "asylum" },
  { org: "Two Ridings Community Foundation", amount: 21023, theme: "asylum" },
  { org: "United St Saviour's Charity", amount: 3250, theme: "asylum" },
  { org: "Walcot Foundation", amount: 113700, theme: "asylum" },
  { org: "Woodward Charitable Trust", amount: 10050, theme: "asylum" },
  { org: "Barrow Cadbury Trust", amount: 100000, theme: "children" },
  { org: "Birmingham City Council", amount: 2329.5, theme: "children" },
  { org: "Cheshire Community Foundation", amount: 329797.93, theme: "children" },
  { org: "City Bridge Trust", amount: 845660, theme: "children" },
  { org: "Co-operative Group", amount: 3957517.97, theme: "children" },
  { org: "Comic Relief", amount: 4430584, theme: "children" },
  { org: "Community Foundation for Surrey", amount: 139570.82, theme: "children" },
  { org: "Community Foundation serving Tyne & Wear and Northumberland", amount: 105670, theme: "children" },
  { org: "Corra Foundation", amount: 251064, theme: "children" },
  { org: "Esmée Fairbairn Foundation", amount: 8693006, theme: "children" },
  { org: "Essex Community Foundation", amount: 1028441, theme: "children" },
  { org: "Heart Of England Community Foundation", amount: 276396, theme: "children" },
  { org: "Joseph Rowntree Charitable Trust", amount: 120000, theme: "children" },
  { org: "Joseph Rowntree Foundation", amount: 21327, theme: "children" },
  { org: "Lankelly Chase Foundation", amount: 355681, theme: "children" },
  { org: "Lloyds Bank Foundation for England and Wales", amount: 648741, theme: "children" },
  { org: "London Borough of Barnet", amount: 5000, theme: "children" },
  { org: "London Catalyst", amount: 8800, theme: "children" },
  { org: "London Councils", amount: 5369684, theme: "children" },
  { org: "Macc", amount: 3859.24, theme: "children" },
  { org: "Masonic Charitable Foundation", amount: 12000, theme: "children" },
  { org: "Oxford City Council", amount: 43500, theme: "children" },
  { org: "Oxfordshire Community Foundation", amount: 435018.98, theme: "children" },
  { org: "Quartet Community Foundation", amount: 1272540.24, theme: "children" },
  { org: "R S Macdonald Charitable Trust", amount: 976384, theme: "children" },
  { org: "Road Safety Trust", amount: 314369, theme: "children" },
  { org: "Scottish Council For Voluntary Organisations", amount: 129787, theme: "children" },
  { org: "Seafarers UK", amount: 155000, theme: "children" },
  { org: "Somerset Community Foundation", amount: 23513, theme: "children" },
  { org: "Sport England", amount: 340340, theme: "children" },
  { org: "Staples Trust", amount: 4000, theme: "children" },
  { org: "Tedworth Charitable Trust", amount: 5000, theme: "children" },
  { org: "The Big Lottery Fund", amount: 56960366, theme: "children" },
  { org: "The Blagrave Trust", amount: 75000, theme: "children" },
  { org: "The Clothworkers Foundation", amount: 76400, theme: "children" },
  { org: "The Dulverton Trust", amount: 25000, theme: "children" },
  { org: "The Henry Smith Charity", amount: 401920, theme: "children" },
  { org: "The Joseph Rank Trust", amount: 88500, theme: "children" },
  { org: "The Robertson Trust", amount: 438000, theme: "children" },
  { org: "The Tudor Trust", amount: 517500, theme: "children" },
  { org: "The Wellcome Trust", amount: 14523242, theme: "children" },
  { org: "Three Guineas Trust", amount: 105500, theme: "children" },
  { org: "Trafford Housing Trust Social Investment", amount: 36933.6, theme: "children" },
  { org: "Trafford Metropolitan Borough Council", amount: 6641, theme: "children" },
  { org: "True Colours Trust", amount: 415188, theme: "children" },
  { org: "Tuixen Foundation", amount: 260000, theme: "children" },
  { org: "Two Ridings Community Foundation", amount: 156548.13, theme: "children" },
  { org: "United St Saviour's Charity", amount: 95167.5, theme: "children" },
  { org: "Virgin Money Foundation", amount: 48989, theme: "children" },
  { org: "Walcot Foundation", amount: 222393, theme: "children" },
  { org: "Wiltshire Community Foundation", amount: 222327, theme: "children" },
  { org: "Woodward Charitable Trust", amount: 17350, theme: "children" },
  { org: "ZING", amount: 177000, theme: "children" },
  { org: "A B Charitable Trust", amount: 15000, theme: "disabled" },
  { org: "Barrow Cadbury Trust", amount: 63500, theme: "disabled" },
  { org: "Birmingham City Council", amount: 40622, theme: "disabled" },
  { org: "Cheshire Community Foundation", amount: 101700.65, theme: "disabled" },
  { org: "City Bridge Trust", amount: 1043250, theme: "disabled" },
  { org: "Co-operative Group", amount: 1359322.53, theme: "disabled" },
  { org: "Comic Relief", amount: 59965, theme: "disabled" },
  { org: "Community Foundation for Surrey", amount: 56380.5, theme: "disabled" },
  { org: "Community Foundation serving Tyne & Wear and Northumberland", amount: 21409, theme: "disabled" },
  { org: "Corra Foundation", amount: 44320, theme: "disabled" },
  { org: "Esmée Fairbairn Foundation", amount: 3036536, theme: "disabled" },
  { org: "Essex Community Foundation", amount: 733819.48, theme: "disabled" },
  { org: "Heart Of England Community Foundation", amount: 103176.72, theme: "disabled" },
  { org: "Joseph Rowntree Foundation", amount: 7650, theme: "disabled" },
  { org: "Lloyds Bank Foundation for England and Wales", amount: 1330979, theme: "disabled" },
  { org: "London Borough of Barnet", amount: 25030.5, theme: "disabled" },
  { org: "London Catalyst", amount: 24500, theme: "disabled" },
  { org: "London Councils", amount: 3360000, theme: "disabled" },
  { org: "Macc", amount: 6000, theme: "disabled" },
  { org: "Masonic Charitable Foundation", amount: 265400, theme: "disabled" },
  { org: "Nesta", amount: 15000, theme: "disabled" },
  { org: "Oxford City Council", amount: 250, theme: "disabled" },
  { org: "Oxfordshire Community Foundation", amount: 178202.5, theme: "disabled" },
  { org: "Pears Foundation", amount: 270000, theme: "disabled" },
  { org: "Quartet Community Foundation", amount: 392543.51, theme: "disabled" },
  { org: "R S Macdonald Charitable Trust", amount: 281736, theme: "disabled" },
  { org: "Road Safety Trust", amount: 62908, theme: "disabled" },
  { org: "Scottish Council For Voluntary Organisations", amount: 391415.46, theme: "disabled" },
  { org: "Somerset Community Foundation", amount: 22209, theme: "disabled" },
  { org: "Sport England", amount: 10618951, theme: "disabled" },
  { org: "The Big Lottery Fund", amount: 36030937, theme: "disabled" },
  { org: "The Clothworkers Foundation", amount: 1319250, theme: "disabled" },
  { org: "The Dunhill Medical Trust", amount: 43000, theme: "disabled" },
  { org: "The Henry Smith Charity", amount: 322000, theme: "disabled" },
  { org: "The Robertson Trust", amount: 293500, theme: "disabled" },
  { org: "The Tudor Trust", amount: 469000, theme: "disabled" },
  { org: "The Wellcome Trust", amount: 3148191, theme: "disabled" },
  { org: "Three Guineas Trust", amount: 311420, theme: "disabled" },
  { org: "Trafford Housing Trust Social Investment", amount: 14282, theme: "disabled" },
  { org: "Trafford Metropolitan Borough Council", amount: 2781, theme: "disabled" },
  { org: "True Colours Trust", amount: 150979, theme: "disabled" },
  { org: "Tuixen Foundation", amount: 90000, theme: "disabled" },
  { org: "Two Ridings Community Foundation", amount: 70387.35, theme: "disabled" },
  { org: "Wiltshire Community Foundation", amount: 3939.5, theme: "disabled" },
  { org: "Woodward Charitable Trust", amount: 5750, theme: "disabled" },
  { org: "Birmingham City Council", amount: 620, theme: "elderly" },
  { org: "Cheshire Community Foundation", amount: 3840, theme: "elderly" },
  { org: "City Bridge Trust", amount: 157400, theme: "elderly" },
  { org: "Co-operative Group", amount: 491408.26, theme: "elderly" },
  { org: "Community Foundation for Surrey", amount: 2755, theme: "elderly" },
  { org: "Corra Foundation", amount: 13732, theme: "elderly" },
  { org: "Essex Community Foundation", amount: 213907, theme: "elderly" },
  { org: "Heart Of England Community Foundation", amount: 47437, theme: "elderly" },
  { org: "Lloyds Bank Foundation for England and Wales", amount: 149391, theme: "elderly" },
  { org: "London Borough of Barnet", amount: 4030, theme: "elderly" },
  { org: "London Catalyst", amount: 6000, theme: "elderly" },
  { org: "Oxfordshire Community Foundation", amount: 80565, theme: "elderly" },
  { org: "Quartet Community Foundation", amount: 77247, theme: "elderly" },
  { org: "R S Macdonald Charitable Trust", amount: 26300, theme: "elderly" },
  { org: "Scottish Council For Voluntary Organisations", amount: 37509.88, theme: "elderly" },
  { org: "Seafarers UK", amount: 10000, theme: "elderly" },
  { org: "The Big Lottery Fund", amount: 1887156, theme: "elderly" },
  { org: "The Clothworkers Foundation", amount: 39500, theme: "elderly" },
  { org: "The Dunhill Medical Trust", amount: 43000, theme: "elderly" },
  { org: "The Robertson Trust", amount: 27000, theme: "elderly" },
  { org: "The Tudor Trust", amount: 30000, theme: "elderly" },
  { org: "The Wellcome Trust", amount: 465402, theme: "elderly" },
  { org: "Trafford Housing Trust Social Investment", amount: 5914, theme: "elderly" },
  { org: "Tuixen Foundation", amount: 25000, theme: "elderly" },
  { org: "Two Ridings Community Foundation", amount: 6876.3, theme: "elderly" },
  { org: "United St Saviour's Charity", amount: 4000, theme: "elderly" },
  { org: "Woodward Charitable Trust", amount: 1000, theme: "elderly" },
  { org: "Cheshire Community Foundation", amount: 200292.06, theme: "ethnic" },
  { org: "Co-operative Group", amount: 14529., theme: "ethnic" },
  { org: "Community Foundation for Surrey", amount: 132751.15, theme: "ethnic" },
  { org: "Community Foundation serving Tyne & Wear and Northumberland", amount: 3293, theme: "ethnic" },
  { org: "Esmée Fairbairn Foundation", amount: 140000, theme: "ethnic" },
  { org: "Essex Community Foundation", amount: 823886, theme: "ethnic" },
  { org: "Heart Of England Community Foundation", amount: 522282.48, theme: "ethnic" },
  { org: "Joseph Rowntree Charitable Trust", amount: 60000, theme: "ethnic" },
  { org: "Lankelly Chase Foundation", amount: 10000, theme: "ethnic" },
  { org: "London Catalyst", amount: 2000, theme: "ethnic" },
  { org: "Macc", amount: 500, theme: "ethnic" },
  { org: "Masonic Charitable Foundation", amount: 5000, theme: "ethnic" },
  { org: "Oxfordshire Community Foundation", amount: 271275.95, theme: "ethnic" },
  { org: "Quartet Community Foundation", amount: 1321798.76, theme: "ethnic" },
  { org: "Scottish Council For Voluntary Organisations", amount: 81095.99, theme: "ethnic" },
  { org: "Somerset Community Foundation", amount: 23574, theme: "ethnic" },
  { org: "The Big Lottery Fund", amount: 9531635, theme: "ethnic" },
  { org: "The Henry Smith Charity", amount: 78200, theme: "ethnic" },
  { org: "The Tudor Trust", amount: 80000, theme: "ethnic" },
  { org: "The Wellcome Trust", amount: 1194920, theme: "ethnic" },
  { org: "Two Ridings Community Foundation", amount: 9650, theme: "ethnic" },
  { org: "United St Saviour's Charity", amount: 30018, theme: "ethnic" },
  { org: "Woodward Charitable Trust", amount: 2000, theme: "ethnic" },
  { org: "Barrow Cadbury Trust", amount: 374470, theme: "women" },
  { org: "Birmingham City Council", amount: 10250, theme: "women" },
  { org: "Cheshire Community Foundation", amount: 35102, theme: "women" },
  { org: "City Bridge Trust", amount: 231800, theme: "women" },
  { org: "Co-operative Group", amount: 285803.43, theme: "women" },
  { org: "Comic Relief", amount: 3744036, theme: "women" },
  { org: "Community Foundation for Surrey", amount: 4000, theme: "women" },
  { org: "Community Foundation serving Tyne & Wear and Northumberland", amount: 8786, theme: "women" },
  { org: "Corra Foundation", amount: 24143, theme: "women" },
  { org: "Esmée Fairbairn Foundation", amount: 2877065, theme: "women" },
  { org: "Essex Community Foundation", amount: 241597, theme: "women" },
  { org: "Heart Of England Community Foundation", amount: 120897.24, theme: "women" },
  { org: "Indigo Trust", amount: 4000, theme: "women" },
  { org: "Joseph Rowntree Charitable Trust", amount: 642500, theme: "women" },
  { org: "Joseph Rowntree Foundation", amount: 9594, theme: "women" },
  { org: "Lankelly Chase Foundation", amount: 124810, theme: "women" },
  { org: "Lloyds Bank Foundation for England and Wales", amount: 2493053.02, theme: "women" },
  { org: "London Borough of Barnet", amount: 7500, theme: "women" },
  { org: "London Catalyst", amount: 16000, theme: "women" },
  { org: "London Councils", amount: 13157548, theme: "women" },
  { org: "Macc", amount: 500, theme: "women" },
  { org: "Masonic Charitable Foundation", amount: 5000, theme: "women" },
  { org: "Oxford City Council", amount: 15000, theme: "women" },
  { org: "Oxfordshire Community Foundation", amount: 94781, theme: "women" },
  { org: "Quartet Community Foundation", amount: 290826, theme: "women" },
  { org: "R S Macdonald Charitable Trust", amount: 45000, theme: "women" },
  { org: "Scottish Council For Voluntary Organisations", amount: 51693, theme: "women" },
  { org: "Seafarers UK", amount: 5000, theme: "women" },
  { org: "Sport England", amount: 8141840, theme: "women" },
  { org: "Staples Trust", amount: 11000, theme: "women" },
  { org: "Tedworth Charitable Trust", amount: 0, theme: "women" },
  { org: "The Big Lottery Fund", amount: 25039291, theme: "women" },
  { org: "The Clothworkers Foundation", amount: 254900, theme: "women" },
  { org: "The Dulverton Trust", amount: 50000, theme: "women" },
  { org: "The Henry Smith Charity", amount: 407500, theme: "women" },
  { org: "The Robertson Trust", amount: 217500, theme: "women" },
  { org: "The Tudor Trust", amount: 736500, theme: "women" },
  { org: "The Wellcome Trust", amount: 7780536, theme: "women" },
  { org: "Trafford Housing Trust Social Investment", amount: 6178, theme: "women" },
  { org: "Two Ridings Community Foundation", amount: 25579, theme: "women" },
  { org: "United St Saviour's Charity", amount: 45872, theme: "women" },
  { org: "Virgin Money Foundation", amount: 228825, theme: "women" },
  { org: "Wiltshire Community Foundation", amount: 1495, theme: "women" },
  { org: "Woodward Charitable Trust", amount: 13000, theme: "women" },
];
