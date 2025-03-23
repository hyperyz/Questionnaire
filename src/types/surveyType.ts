export interface ISurveyItem {
    materialName: string;
    comName: string;
}
export interface ISurveyComs {
    title: string;
    list: Array<ISurveyItem>;
}