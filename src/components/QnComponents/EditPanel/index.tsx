import React from "react"
import styles from "./index.module.scss"
import { nameToEditorComMap } from "@/configs/nameToEditorMap";
import { IComponentHeader } from "@/types/componentsType";
function EditPanel({ coms }: { coms: IComponentHeader }): React.ReactElement {
    function handleEditItems(coms: IComponentHeader) {
        return Object.keys(coms).map((key: string) => {
            const comName = coms[key].name;
            const EditComponent = nameToEditorComMap[comName];
            if (coms[key].isShow) {
                return (
                    <div key={key}>
                        <EditComponent configKey={key} configs={coms[key]} />
                    </div>
                );
            }
        })
    }
    return (
        <div className={styles.editPannelContainer}>
            {
                ...handleEditItems(coms)
            }
        </div>
    )
}

export default EditPanel