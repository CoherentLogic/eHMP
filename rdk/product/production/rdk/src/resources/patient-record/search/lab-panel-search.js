/* disable single-quote checks due to apostrophes */
/* jshint -W109 */
'use strict';

var _ = require('underscore');

module.exports = labPanelSearch;

function labPanelSearch(searchTerm) {

    var labPanels = [
        "24 HR URINE PROTEIN",
        "24 HR URINE PROTEIN",
        "AGLUCOSE",
        "AGLUCOSE",
        "ALCOHOL PROFILE",
        "ALCOHOL PROFILE",
        "AMIKACIN",
        "AMIKACIN",
        "AMITRIPTYLINE & NORTRIPTYLINE",
        "AMITRIPTYLINE & NORTRIPTYLINE",
        "ANTI-THYROID ANTIBODIES GROUP",
        "ANTI-THYROID ANTIBODIES GROUP",
        "ANTIEPILEPTICS",
        "ANTIEPILEPTICS",
        "ASTRA GLUCOSE",
        "ASTRA GLUCOSE",
        "BASIC METABOLIC PANEL",
        "BASIC METABOLIC PANEL",
        "BB CBC-TEST",
        "BB CBC-TEST",
        "BILIRUBIN,TOTAL & DIRECT",
        "BILIRUBIN,TOTAL & DIRECT",
        "BLOOD GASES",
        "BLOOD GASES",
        "BUN 1",
        "BUN 1",
        "BUN 2",
        "BUN 2",
        "C-ACID PHOS",
        "C-ACID PHOS",
        "CARDIAC ENZYMES",
        "CARDIAC ENZYMES",
        "CARDIAC ISOENZYMES",
        "CARDIAC ISOENZYMES",
        "CARDIAC PANEL",
        "CARDIAC PANEL",
        "CBC",
        "CBC",
        "CBC & DIFF (WITH MORPHOLOGY)",
        "CBC & DIFF (WITH MORPHOLOGY)",
        "CELL COUNT (FLUID)",
        "CELL COUNT (FLUID)",
        "CHEM 10 TEST (BRONX)",
        "CHEM 10 TEST (BRONX)",
        "CHEM 20",
        "CHEM 20",
        "CHEM 3",
        "CHEM 3",
        "CHEM 4",
        "CHEM 4",
        "CHEM 7",
        "CHEM 7",
        "CHEM/RIA PANEL",
        "CHEM/RIA PANEL",
        "CHEMISTRY ADMISSION PANEL",
        "CHEMISTRY ADMISSION PANEL",
        "CIE SCREEN",
        "CIE SCREEN",
        "CK ISO'S",
        "CK ISO'S",
        "CL 2",
        "CL 2",
        "CL1",
        "CL1",
        "CLEARANCE PANEL",
        "CLEARANCE PANEL",
        "CO2 1",
        "CO2 1",
        "CO2 2",
        "CO2 2",
        "COAG PROFILE",
        "COAG PROFILE",
        "COCCIDIODES SCREEN",
        "COCCIDIODES SCREEN",
        "CPK ISO'S & TOTAL CPK",
        "CPK ISO'S & TOTAL CPK",
        "CPK PROFILE",
        "CPK PROFILE",
        "CREAT 1",
        "CREAT 1",
        "CREAT 2",
        "CREAT 2",
        "DIC WORK-UP",
        "DIC WORK-UP",
        "DIFF COUNT (FLUID)",
        "DIFF COUNT (FLUID)",
        "DIFFERENTIAL COUNT",
        "DIFFERENTIAL COUNT",
        "DIGOXIN (STAT)",
        "DIGOXIN (STAT)",
        "DOXEPIN & N-DESMETHYLDOXEPIN",
        "DOXEPIN & N-DESMETHYLDOXEPIN",
        "DRUG SCREEN (URINE)",
        "DRUG SCREEN (URINE)",
        "FACTOR VIII PROFILE",
        "FACTOR VIII PROFILE",
        "FEBRILE AGGLUTININS",
        "FEBRILE AGGLUTININS",
        "FINSTICK GLUCOSE - BUFFALO",
        "FINSTICK GLUCOSE - BUFFALO",
        "FLUID CHEMISTRIES",
        "FLUID CHEMISTRIES",
        "FLUID CHEMISTRIES",
        "FLUID CHEMISTRIES",
        "FREE HGB",
        "FREE HGB",
        "FUNGUS ANTIBODY GROUP",
        "GENTAMICIN",
        "GENTAMICIN",
        "GLU 1",
        "GLU 1",
        "GLU 2",
        "GLU 2",
        "GLUCOSE TOLERANCE TEST",
        "GLUCOSE TOLERANCE TEST",
        "GLUCOSE rtn",
        "GLUCOSE rtn",
        "GTT,BLOOD",
        "GTT,BLOOD",
        "GTT,URINE",
        "GTT,URINE",
        "HEAVY METALS SCREEN",
        "HELPER/SUPPRESSOR RATIO",
        "HELPER/SUPPRESSOR RATIO",
        "HEPATITIS B SCREEN",
        "HEPATITIS B SCREEN",
        "HGB & HCT",
        "HGB & HCT",
        "HGB SERUM FREE",
        "HGB SERUM FREE",
        "IMIPRAMINE & DESIPRAMINE",
        "IMIPRAMINE & DESIPRAMINE",
        "IMMUNOGLOBULINS",
        "IMMUNOGLOBULINS",
        "IRON GROUP",
        "IRON GROUP",
        "K 1",
        "K 1",
        "K 2",
        "K 2",
        "KDA",
        "KDA",
        "KGLUCOSE",
        "KGLUCOSE",
        "LAB T",
        "LAB T",
        "LACTOSE TOLERANCE",
        "LACTOSE TOLERANCE",
        "LDH PROFILE",
        "LDH PROFILE",
        "LIPID PHENOTYPE EVAL.",
        "    LIPID PHENOTYPE EVAL.",
        "    LIPID PROFILE",
        "LIPID PROFILE",
        "LIVER FUNCTION TEST",
        "LIVER FUNCTION TEST",
        "LIVER PANEL 2",
        "LIVER PANEL 2",
        "LYTES",
        "LYTES",
        "MANUAL LIVER",
        "MANUAL LIVER",
        "MI TEST PANEL",
        "MI TEST PANEL",
        "MIKES PANEL W/IN PANEL",
        "MIKES PANEL W/IN PANEL",
        "MJB CHEM TESTS",
        "MJB CHEM TESTS",
        "NA1",
        "NA1",
        "NEUROGENIC VIRAL SCREEN",
        "NEUROGENIC VIRAL SCREEN",
        "OVER 50 PANEL",
        "OVER 50 PANEL",
        "P1 PROFILE 1",
        "P1 PROFILE 1",
        "P2 PROFILE 2",
        "P2 PROFILE 2",
        "P3 (BROCT.)",
        "P3 (BROCT.)",
        "P3 (ROX)",
        "P3 (ROX)",
        "PARASITOLOGY",
        "PARASITOLOGY",
        "PLASMA FREE HGB",
        "PLASMA FREE HGB",
        "PORPHYRINS",
        "PORPHYRINS",
        "PROCAINAMIDES",
        "PROCAINAMIDES",
        "PROFILE 3 (ROUTINE)",
        "PROFILE 3 (ROUTINE)",
        "PROFILE 3 (STAT)",
        "PROFILE 3 (STAT)",
        "PROTEIN,PERICARDIAL",
        "PROTEIN,PERICARDIAL",
        "PROTEIN,PERITONEAL",
        "PROTEIN,PERITONEAL",
        "PROTEIN,PLEURAL",
        "PROTEIN,PLEURAL",
        "PROTEIN,SYNOVIAL",
        "PROTEIN,SYNOVIAL",
        "PROV URINE",
        "PROV URINE",
        "RASHES VIRAL SCREEN",
        "RASHES VIRAL SCREEN",
        "RBC MORPHOLOGY",
        "RBC MORPHOLOGY",
        "RBC TEST PANEL",
        "RBC TEST PANEL",
        "RESPIRATORY VIRAL BATTERY",
        "RESPIRATORY VIRAL BATTERY",
        "RIA PANEL",
        "RIA PANEL",
        "SALMONELLA AGGLUTINATION",
        "SALMONELLA AGGLUTINATION",
        "SCREEN, ALCOHOLS",
        "SCREEN, ALCOHOLS",
        "SCREEN, TOXICOLOGY",
        "SCREEN, TOXICOLOGY",
        "SEMEN ANALYSIS",
        "SEMEN ANALYSIS",
        "T AND B LYMPHOCYTES",
        "T AND B LYMPHOCYTES",
        "T4, FREE & TOTAL",
        "T4, FREE & TOTAL",
        "TEST CBC/DIFF",
        "TEST CBC/DIFF",
        "TEST2",
        "TEST2",
        "TESTPANEL",
        "TESTPANEL",
        "TESTPANEL 4 WNY",
        "TESTPANEL 4 WNY",
        "TESTPANEL2",
        "TESTPANEL2",
        "THYROID GROUP",
        "THYROID GROUP",
        "TOBRAMYCIN",
        "TOBRAMYCIN",
        "TOTAL WHITE COUNT ON CYTOPREP",
        "TOTAL WHITE COUNT ON CYTOPREP",
        "TOX SCREEN",
        "TOX SCREEN",
        "TOX SCREEN, URINE",
        "TOX SCREEN, URINE",
        "TRICYCLICS",
        "TRICYCLICS",
        "URIC ACID",
        "URIC ACID",
        "URINALYSIS",
        "URINALYSIS",
        "URINE DIFF",
        "URINE DIFF",
        "VANCOMYCIN",
        "VANCOMYCIN",
        "WINTROBE ESR & CBC",
        "WINTROBE ESR & CBC",
        "WINTROBE, WESTERGREN, CBC",
        "WINTROBE, WESTERGREN, CBC",
        "ZGLUCOSE*",
        "ZGLUCOSE*",
        "ZZ CBC & MORPHOLOGY (NO DIFF)",
        "ZZ CBC & MORPHOLOGY (NO DIFF)",
        "ZZ CBC PROFILE",
        "ZZ CBC PROFILE",
        "ZZ DUMMY",
        "ZZ DUMMY",
        "ZZ PARTIAL THROMBOPLASTIN TIME",
        "ZZ PARTIAL THROMBOPLASTIN TIME",
        "ZZ PROTHROMBIN TIME",
        "ZZ PROTHROMBIN TIME",
        "ZZ RETICULOCYTES & CBC",
        "ZZ RETICULOCYTES & CBC",
        "ZZ WESTERGREN ESR & CBC",
        "ZZ WESTERGREN ESR & CBC",
        "ZZGLUCOSE*",
        "ZZGLUCOSE*",
        "ZZJEANIE(GLUCOSE PANEL)",
        "ZZJEANIE(GLUCOSE PANEL)"
    ];

    var responseArray = [];

    _.each(labPanels, function (labPanel) {
        if (labPanel.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
            responseArray = responseArray.concat(labPanel);
        }
    });
    return responseArray;
}