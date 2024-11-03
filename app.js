// app.js
const FoodIntroductionSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedAge, setSelectedAge] = React.useState(36);

  // Volledige database met alle voedsel
  const foodDatabase = {
    // Dranken
    'moedermelk aan de borst': 0,
    'moedermelk afgekolfd': 0,
    'donormoedermelk': 0,
    'kunstmatige zuigelingenvoeding': 0,
    'kruidenthee': 0,
    'water': 0,
    'verdund vruchtensap': 11,

    // Zuivel - 7-9 maanden
    'kwark': 7,
    'yoghurt': 7,
    'zuivelhapjes': 7,

    // Groenten - 6 maanden
    'aardappel': 6, 'aardpeer': 6, 'amsoi': 6, 'andijvie': 6, 'artisjok': 6,
    'asperge': 6, 'aubergine': 6, 'bleekselderij': 6, 'bloemkool': 6, 'broccoli': 6,
    'champignons': 6, 'chinese kool': 6, 'courgette': 6, 'doperwten': 6,
    'jonge peultjes': 6, 'jonge sperzieboontjes': 6, 'jonge tuinboontjes': 6,
    'knolselderij': 6, 'komkommer': 6, 'koolraap': 6, 'koolrabi': 6, 'meiknol': 6,
    'paddenstoelen': 6, 'paksoi': 6, 'pastinaak': 6, 'pompoen': 6, 'postelein': 6,
    'raapstelen': 6, 'rabarber': 6, 'radijs': 6, 'rammenas': 6, 'rode biet': 6,
    'schorseneren': 6, 'snijbiet': 6, 'snijboon': 6, 'spinazie': 6, 'spruiten': 6,
    'venkel': 6, 'waterkers': 6, 'witlof': 6, 'wortel': 6, 'zoete aardappel': 6,
    'zuurkool': 6,

    // Groenten - 1.5 jaar (18 maanden)
    'boerenkool': 18, 'maïskolf': 18, 'prei': 18, 'savooiekool': 18,
    'spitskool': 18, 'ui': 18, 'witte kool': 18, 'rode kool': 18,

    // Rauwkost - 6-8 maanden
    'rauwe komkommer': 6,
    'tomaat': 6,
    'sla': 6,
    'paprika': 6,

    // Fruit - 6 maanden
    'abrikoos': 6, 'ananasmeloen': 6, 'appel': 6, 'avocado': 6, 'banaan': 6,
    'druif': 6, 'duindoorn': 6, 'kers': 6, 'mango': 6, 'meloen': 6, 'peer': 6,
    'perzik': 6, 'pruim': 6, 'rozenbottel': 6, 'stoofpeer': 6, 'suikermeloen': 6,

    // Fruit - 9 maanden
    'citroen': 9, 'grapefruit': 9, 'mandarijn': 9, 'nectarine': 9, 'sinaasappel': 9,

    // Fruit - 12 maanden
    'aalbes': 12, 'aardbei': 12, 'ananas': 12, 'bosbes': 12, 'braam': 12,
    'framboos': 12, 'kiwi': 12, 'kruisbes': 12, 'rode bes': 12, 'vlierbes': 12,
    'zwarte bes': 12,

    // Eiwitbronnen - 7 maanden
    'jonge pitloze kaas': 7,

    // Eiwitbronnen - 9-10 maanden
    'mager rundergehakt': 9, 'lamsvlees': 9, 'kipfilet': 9, 'kalkoenfilet': 9,
    'paardenvlees': 9, 'ei': 9, 'vis': 9, 'zachte franse kaas': 9, 'sojakaas': 9,
    'tahoe': 9, 'sojamelk': 9,

    // Eiwitbronnen - 1 jaar
    'varkensvlees': 12, 'schaal- en schelpdieren': 12, 'blauwe kaas': 12,
    'sterke franse kaas': 12, 'hollandse kaas': 12, 'vleesvervangers': 12,

    // Eiwitbronnen - 3 jaar
    'worst': 36, 'leverworst': 36, 'smeerworst': 36, 'leverpastei': 36,

    // Brood en graanproducten
    'broodkorst': 6,
    'volkorenbrood': 7, 'zuurdesembrood': 7, 'boekweitmeel': 7, 'boekweitwafel': 7,
    'vezelrijk volkorenbrood': 10, 'babymuesli': 10, 'havermout': 10,
    'volkorenbeschuit': 10, 'volkorenknäckebröd': 10, 'ontbijtkoek': 10,
    'roggebrood': 10,
    'rijst': 12, 'rijstwafel': 12,
    'rozijnenbrood': 18, 'krentenbrood': 18,

    // Broodbeleg - 7-8 maanden
    'appelstroop': 7, 'perenstroop': 7, 'duindoornmoes': 7, 'geprakt fruit': 7,
    'jonge kaas': 7, 'schijfjes fruit': 7,

    // Broodbeleg - 9 maanden
    'pindakaas': 9, 'sesampasta': 9, 'tahin': 9, 'amandelpasta': 9, 'notenpasta': 9,

    // Broodbeleg - 2 jaar
    'chocoladepasta': 24,

    // Granen en pasta - 8-9 maanden
    'gierst': 8, 'couscous': 8, 'quinoa': 8, 'boekweitgrutten': 8,
    'macaroni': 8, 'spaghetti': 8, 'pasta': 8,

    // Peulvruchten - 8-10 maanden
    'linzen': 8, 'kikkererwten': 8, 'taugéboontjes': 8,

    // Peulvruchten - 9-12 maanden
    'bruine bonen': 9, 'peulvruchten': 9,

    // Peulvruchten - 1 jaar
    'tempé': 12,

    // Vetten - 8-9 maanden
    'roomboter': 8, 'zachte margarine': 8,

    // Vetten - 9-12 maanden
    'zonnebloemolie': 9, 'olijfolie': 9, 'saffloerolie': 9, 'sesamolie': 9,
    'kokosolie': 9,

    // Vetten - 1 jaar
    'visvetten': 12,

    // Zoet en snacks
    'honing': 12,
    'snoep': 24, 'chips': 24, 'koek': 24, 'ijs': 24, 'chocola': 24,

    // Zuidvruchten - 1 jaar
    'ongezwavelde zuidvruchten': 12, 'rozijntjes': 12,

    // Overig
    'zout': 12,
    'zacht smakende kruiden': 12
  };

  const filteredResults = React.useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase();
    const results = [];
    
    for (const [food, months] of Object.entries(foodDatabase)) {
      if (months <= selectedAge && food.toLowerCase().includes(searchTermLower)) {
        results.push({ food, months });
      }
    }
    
    return results.sort((a, b) => a.months - b.months);
  }, [searchTerm, selectedAge]);

  const getMonthsLabel = (months) => {
    if (months === 0) return 'vanaf geboorte';
    if (months >= 36) return '3 jaar';
    if (months >= 24) return '2 jaar';
    if (months >= 18) return '1,5 jaar';
    if (months >= 12) return '1 jaar';
    return `${months} maanden`;
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Voedselintroductie Zoektool</h1>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Leeftijd van het kind
          </label>
          <select
            value={selectedAge}
            onChange={(e) => setSelectedAge(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            <option value={0}>Vanaf geboorte</option>
            <option value={6}>6 maanden</option>
            <option value={7}>7 maanden</option>
            <option value={8}>8 maanden</option>
            <option value={9}>9 maanden</option>
            <option value={10}>10 maanden</option>
            <option value={11}>11 maanden</option>
            <option value={12}>1 jaar</option>
            <option value={18}>1,5 jaar</option>
            <option value={24}>2 jaar</option>
            <option value={36}>3 jaar</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Zoek voedsel
          </label>
          <input
            type="text"
            placeholder="Bijv. appel, wortel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mt-4">
          {searchTerm && filteredResults.length === 0 ? (
            <p className="text-gray-500">Geen resultaten gevonden</p>
          ) : (
            <div className="space-y-2">
              {filteredResults.map(({ food, months }) => (
                <div
                  key={food}
                  className="p-3 border rounded bg-white flex justify-between items-center"
                >
                  <span className="font-medium capitalize">{food}</span>
                  <span className="text-sm text-gray-600">
                    vanaf {getMonthsLabel(months)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Render de app
ReactDOM.render(React.createElement(FoodIntroductionSearch), document.getElementById('root'));
