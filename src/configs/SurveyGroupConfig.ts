import { ISurveyComs } from "@/types/surveyType";

export const SurveyComsList: Array<ISurveyComs> = [
    {
        title: '选择题',
        list: [
            { materialName: 'single-select', comName: '单选' },
            { materialName: 'single-pic-select', comName: '图片单选' },
        ]
    }
]