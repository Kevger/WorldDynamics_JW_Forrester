import TABHL from "./Table";
export default class WorldDynamics {
  clip(value1, value2, switchTime, t) {
    return t <= switchTime ? value1 : value2;
  }

  constructor() {
    this.reset();

    //Tables
    //3 & 3.1
    this.BRMMT = new TABHL([
      [0.0, 1.2],
      [1.0, 1.0],
      [2.0, 0.85],
      [3.0, 0.75],
      [4.0, 0.7],
      [5.0, 0.7]
    ]);

    //6 & 6.1
    this.NREMT = new TABHL([
      [0.0, 0.0],
      [0.25, 0.15],
      [0.5, 0.5],
      [0.75, 0.85],
      [1.0, 1.0]
    ]);

    //11 & 11.1
    this.DRMMT = new TABHL([
      [0.0, 3.0],
      [0.5, 1.8],
      [1.0, 1.0],
      [1.5, 0.8],
      [2.0, 0.7],
      [2.5, 0.6],
      [3.0, 0.53],
      [3.5, 0.5],
      [4.0, 0.5],
      [4.5, 0.5],
      [5.0, 0.5]
    ]);

    //12 & 12.1
    this.DRPMT = new TABHL([
      [0.0, 0.92],
      [10.0, 1.3],
      [20.0, 2.0],
      [30.0, 3.2],
      [40.0, 4.8],
      [50.0, 6.8],
      [60.0, 9.2]
    ]);

    //13 & 13.1
    this.DRFMT = new TABHL([
      [0.0, 30.0],
      [0.25, 3.0],
      [0.5, 2.0],
      [0.75, 1.4],
      [1.0, 1.0],
      [1.25, 0.7],
      [1.5, 0.6],
      [1.75, 0.5],
      [2.0, 0.5]
    ]);

    //14 & 14.1
    this.DRCMT = new TABHL([
      [0.0, 0.9],
      [1.0, 1.0],
      [2.0, 1.2],
      [3.0, 1.5],
      [4.0, 1.9],
      [5.0, 3.0]
    ]);

    //16 & 16.1
    this.BRCMT = new TABHL([
      [0.0, 1.05],
      [1.0, 1.0],
      [2.0, 0.9],
      [3.0, 0.7],
      [4.0, 0.6],
      [5.0, 0.55]
    ]);

    //17 & 17.1
    this.BRFMT = new TABHL([
      [0.0, 0.0],
      [1.0, 1.0],
      [2.0, 1.6],
      [3.0, 1.9],
      [4.0, 2.0]
    ]);

    //18 & 18.1
    this.BRPMT = new TABHL([
      [0.0, 1.02],
      [10.0, 0.9],
      [20.0, 0.7],
      [30.0, 0.4],
      [40.0, 0.25],
      [50.0, 0.15],
      [60.0, 0.1]
    ]);

    //20 & 20.1
    this.FCMT = new TABHL([
      [0.0, 2.4],
      [1.0, 1.0],
      [2.0, 0.6],
      [3.0, 0.4],
      [4.0, 0.3],
      [5.0, 0.2]
    ]);

    //21 & 21.1
    this.FPCIT = new TABHL([
      [0.0, 0.5],
      [1.0, 1.0],
      [2.0, 1.4],
      [3.0, 1.7],
      [4.0, 1.9],
      [5.0, 2.05],
      [6.0, 2.2]
    ]);

    //26 & 26.1
    this.CIMT = new TABHL([
      [0.0, 0.1],
      [1.0, 1.0],
      [2.0, 1.8],
      [3.0, 2.4],
      [4.0, 2.8],
      [5.0, 3.0]
    ]);

    //28 & 28.1
    this.FPMT = new TABHL([
      [0.0, 1.02],
      [10.0, 0.9],
      [20.0, 0.65],
      [30.0, 0.35],
      [40.0, 0.2],
      [50.0, 0.1],
      [60.0, 0.05]
    ]);

    //32 & 32.1
    this.POLCMT = new TABHL([
      [0.0, 0.05],
      [1.0, 1.0],
      [2.0, 3.0],
      [3.0, 5.4],
      [4.0, 7.4],
      [5.0, 8.0]
    ]);

    //34 & 34.1
    this.POLATT = new TABHL([
      [0.0, 0.6],
      [10.0, 2.5],
      [20.0, 5.0],
      [30.0, 8.0],
      [40.0, 11.5],
      [50.0, 15.5],
      [60.0, 20.0]
    ]);

    //36 & 36.1
    this.CFIFRT = new TABHL([
      [0.0, 1.0],
      [0.5, 0.6],
      [1.0, 0.3],
      [1.5, 0.15],
      [2.0, 0.1]
    ]);

    //38 & 38.1
    this.QLMT = new TABHL([
      [0.0, 0.2],
      [1.0, 1.0],
      [2.0, 1.7],
      [3.0, 2.3],
      [4.0, 2.7],
      [5.0, 2.9]
    ]);

    //39 & 39.1
    this.QLCT = new TABHL([
      [0.0, 2.0],
      [0.5, 1.3],
      [1.0, 1.0],
      [1.5, 0.75],
      [2.0, 0.55],
      [2.5, 0.45],
      [3.0, 0.38],
      [3.5, 0.3],
      [4.0, 0.25],
      [4.5, 0.22],
      [5.0, 0.2]
    ]);

    //40 & 40.1
    this.QLFT = new TABHL([
      [0.0, 0.0],
      [1.0, 1.0],
      [2.0, 1.8],
      [3.0, 2.4],
      [4.0, 2.7]
    ]);

    //41 & 41.1
    this.QLPT = new TABHL([
      [0.0, 1.04],
      [10.0, 0.85],
      [20.0, 0.6],
      [30.0, 0.3],
      [40.0, 0.15],
      [50.0, 0.05],
      [60.0, 0.02]
    ]);

    //42 & 42.1
    this.NRMMT = new TABHL([
      [0.0, 0.0],
      [1.0, 1.0],
      [2.0, 1.8],
      [3.0, 2.4],
      [4.0, 2.9],
      [5.0, 3.3],
      [6.0, 3.6],
      [7.0, 3.8],
      [8.0, 3.9],
      [9.0, 3.95],
      [10.0, 4.0]
    ]);

    //43 & 43.1
    this.CIQRT = new TABHL([
      [0.0, 0.7],
      [0.5, 0.8],
      [1.0, 1.0],
      [1.5, 1.5],
      [2.0, 2.0]
    ]);
  }
  reset() {
    //Constants
    this.PI = 1.65e9; //1.2
    this.BRN = 0.04; //2.2
    this.BRN1 = 0.04; //2.3 <----- CHANGEABLE
    this.SWT1 = 1970; //2.4
    this.ECIRN = 1.0; //4.1
    this.NRI = 900e9; //8.2
    this.NRUN = 1.0; //9.1
    this.NRUN1 = 1.0; //9.2 <----- CHANGEABLE
    this.SWT2 = 1970; //9.3
    this.DRN = 0.028; //10.2
    this.DRN1 = 0.028; //10.3 <--- CHANGEABLE
    this.SWT3 = 1970; //10.4
    this.LA = 135e6; //15.1
    this.PDN = 26.5; //15.2
    this.FC = 1.0; //19.1
    this.FC1 = 1.0; //19.2 <------ CHANGEABLE
    this.FN = 1.0; //19.3
    this.SWT7 = 1970; //19.4
    this.CIAFN = 0.3; //22.1
    this.CII = 0.4e9; //24.2
    this.CIGN = 0.05; //25.1
    this.CIGN1 = 0.05; //25.2 <--- CHANGEABLE
    this.SWT4 = 1970; //25.3
    this.CIDN = 0.025; //27.1
    this.CIDN1 = 0.025; //27.2 <-- CHANGEABLE
    this.SWT5 = 1970; //27.3
    this.POLS = 3.6e9; //29.1
    this.POLI = 0.2e9; //30.2
    this.POLN = 1.0; //31.1
    this.POLN1 = 1.0; //31.2 <---- CHANGEABLE
    this.SWT6 = 1970; //31.3
    this.CIAFI = 0.2; //35.2
    this.CIAFT = 15.0; //35.3
    this.QLS = 1.0; //37.1
    this.QL = 0;

    //Level
    this.P = this.PI;
    this.NR = this.NRI;
    this.CI = this.CII;
    this.POL = this.POLI;
    this.CIAF = this.CIAFI;
    this.TIME = 1900; //43.7
  }

  softReset() {
    //Level
    this.P = this.PI;
    this.NR = this.NRI;
    this.CI = this.CII;
    this.POL = this.POLI;
    this.CIAF = this.CIAFI;
    this.TIME = 1900; //43.7
  }

  nextStep(DT) {
    //Calculate first everything which is only depending on the levels etc
    this.CR = this.P / (this.LA * this.PDN); //15
    this.BRCM = this.BRCMT.calc(this.CR); //16
    this.DRCM = this.DRCMT.calc(this.CR); //12
    this.FCM = this.FCMT.calc(this.CR); //20
    this.QLC = this.QLCT.calc(this.CR); //39

    this.CIR = this.CI / this.P; //23
    this.POLCM = this.POLCMT.calc(this.CIR); //32
    this.POLG =
      this.POLCM *
      this.P *
      this.clip(this.POLN, this.POLN1, this.SWT6, this.TIME); //31
    this.CIRA = (this.CIR * this.CIAF) / this.CIAFN; //22
    this.FPCI = this.FPCIT.calc(this.CIRA); //22
    this.CID = this.CI * this.clip(this.CIDN, this.CIDN1, this.SWT5, this.TIME); //27

    this.NRFR = this.NR / this.NRI; //7
    this.NREM = this.NREMT.calc(this.NR); //6

    this.POLR = this.POL / this.POLS; //29
    this.FPM = this.FPMT.calc(this.POLR); //28
    this.POLAT = this.POLATT.calc(this.POLR); //34
    this.POLA = this.POL / this.POLAT; //33
    this.BRPM = this.BRPMT.calc(this.POLR); //18
    this.DRPM = this.DRPMT.calc(this.POLR); //12
    this.QLP = this.QLPT.calc(this.POLR); //41

    this.FR =
      (this.FPCI *
        this.FCM *
        this.FPM *
        this.clip(this.FC, this.FC1, this.SWT7, this.TIME)) /
      this.FN; //19
    this.BRFM = this.BRFMT.calc(this.FR); //17
    this.DRFM = this.DRFMT.calc(this.FR); //13
    this.CFIFR = this.CFIFRT.calc(this.FR); //36

    this.QLF = this.QLFT.calc(this.FR); //40
    this.ECIR = (this.CIR * (1.0 - this.CIAF) * this.NREM) / (1 - this.CIAFN); //5
    this.MSL = this.ECIR / this.ECIRN; //4
    this.NRMM = this.NRMMT.calc(this.MSL); //42
    this.DRMM = this.DRMMT.calc(this.MSL); //11
    this.BRMM = this.BRMMT.calc(this.MSL); //3

    this.CIM = this.CIMT.calc(this.MSL); //26
    this.QLM = this.QLMT.calc(this.MSL); //38
    this.CIQR = this.CIQRT.calc(this.QLM / this.QLF); //43
    this.QL = this.QLS * this.QLM * this.QLC * this.QLF * this.QLP; //37
    this.NRUR =
      this.P *
      this.NRMM *
      this.clip(this.NRUN, this.NRUN1, this.SWT2, this.TIME); //9

    this.CIG =
      this.P *
      this.CIM *
      this.clip(this.CIGN, this.CIGN1, this.SWT4, this.TIME); //25
    this.BR =
      this.P *
      this.clip(this.BRN, this.BRN1, this.SWT1, this.TIME) *
      this.BRFM *
      this.BRMM *
      this.BRCM *
      this.BRPM; //2
    this.DR =
      this.P *
      this.clip(this.DRN, this.DRN1, this.SWT3, this.TIME) *
      this.DRMM *
      this.DRPM *
      this.DRFM *
      this.DRCM; //10

    this.POL = this.POL + (this.POLG - this.POLA) * DT; //30
    this.NR = this.NR - this.NRUR * DT; //8
    this.CIAF =
      this.CIAF + (DT / this.CIAFT) * (this.CFIFR * this.CIQR - this.CIAF); //35
    this.P = this.P + DT * (this.BR - this.DR); //1
    this.CI = this.CI + (this.CIG - this.CID) * DT; //24
    this.TIME += DT;
  }
  run(years, dt) {
    let untilYears = this.TIME + years;
    while (this.TIME <= untilYears) {
      this.nextStep(dt);
    }
  }
}
