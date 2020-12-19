import { students } from '@/students.db'
import { hypothesis } from "@/hypothesis.db";


let studentsMinim = []
for (let i = 0; i <students.length; i++) {
    studentsMinim[i] = new Array(9);
    studentsMinim[i][0] = students[i]["1-Quel est ton numéro étudiant ?"];
    studentsMinim[i][1] = students[i]["3-Quel parcours avez vous fait avant d’intégrer l'ensim"].split(";");
    studentsMinim[i][2] = students[i]["12-As-tu déjà réalisé ? [Un robot]"].split(";");
    studentsMinim[i][3] = students[i]["12-As-tu déjà réalisé ? [Un système électronique (capteurs...)]"].split(";");
    studentsMinim[i][4] = students[i]['5-Quelles sont les associations de l\'ensim qui t’intéresse ?'].split(";");
    studentsMinim[i][5] = students[i]["11-As-tu déjà utilisé ? [Une carte Arduino/Raspberry]"].split(";");
    studentsMinim[i][6] = students[i]["11-As-tu déjà utilisé ? [Linux]"].split(";");
    studentsMinim[i][7] = students[i]["10-Quel langage de programmation as-tu déjà utilisé ?"].split(";");
    studentsMinim[i][8] = students[i]["11-As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]"].split(";");
}

let predictions = []

for (let i = 0; i <studentsMinim.length; i++) {
    //output for each student
    predictions[i] = {}
    predictions[i]["id"] = studentsMinim[i][0];
    predictions[i]["hypotheses"] = []
    let score_ips = 0;
    let score_astre = 0;
    //hypotheses = for each hypothesis {id=1, type="ips", hypothesis="hypothesis 1 : paint est un ips", score_total=10,questions=[]}
    for (let j = 0; j < hypothesis.length ; j++) {
        predictions[i]["hypotheses"][j] =  {}
        predictions[i]["hypotheses"][j]["id"] = hypothesis[j]["id"];
        predictions[i]["hypotheses"][j]["type"] = hypothesis[j]["type"];
        predictions[i]["hypotheses"][j]["hypothesis"] = hypothesis[j]["hypothesis"];
        predictions[i]["hypotheses"][j]["questions"] = new Array(hypothesis[j]["questions"].length);
        //calculate score total
        let scoreTotalTemps = 0;
        //questions = for each question {id=1, question="est ce que tu aime Paint", responses=" paint || [paint], score=15"}
        for (let k = 0; k < hypothesis[j]["questions"].length; k++) {
            predictions[i]["hypotheses"][j]["questions"][k] = {}
            let idQuestion =  hypothesis[j]["questions"][k]["id"];
            predictions[i]["hypotheses"][j]["questions"][k]["id"] =  idQuestion;
            predictions[i]["hypotheses"][j]["questions"][k]["question"] = hypothesis[j]["questions"][k]["question"];
            predictions[i]["hypotheses"][j]["questions"][k]["responses"] = studentsMinim[i][idQuestion];
            //calculate the score
            let scoreTemps =0;
            for (let l = 0; l < hypothesis[j]["questions"][k]["responses"].length; l++) {
                for (let m = 0; m < studentsMinim[i][idQuestion].length; m++) {
                    if(studentsMinim[i][idQuestion][m] === hypothesis[j]["questions"][k]["responses"][l]["response"])
                        scoreTemps = scoreTemps+ hypothesis[j]["questions"][k]["responses"][l]["score"];
                }
            }
            predictions[i]["hypotheses"][j]["questions"][k]["score"] = scoreTemps;
            scoreTotalTemps = scoreTotalTemps + scoreTemps;
        }
        predictions[i]["hypotheses"][j]["score_total"] = scoreTotalTemps;
        if(predictions[i]["hypotheses"][j]["type"] == "IPS")
            score_ips = score_ips + scoreTotalTemps;
        else
            score_astre = score_astre + scoreTotalTemps;

    }
    predictions[i]["score_ips"] = score_ips;
    predictions[i]["score_astre"] = score_astre;

    let prediction = "undefined";
    if(predictions[i]["score_ips"]>predictions[i]["score_astre"])
        prediction = "IPS";
    else if(predictions[i]["score_ips"]<predictions[i]["score_astre"])
        prediction = "ASTRE";
    predictions[i]["prediction"] = prediction;


}
export { predictions };
