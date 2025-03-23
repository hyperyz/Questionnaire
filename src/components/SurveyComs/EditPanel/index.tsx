import React from "react"
import styles from "./index.module.scss"
import { nameToEditorComMap } from "@/configs/nameToEditorMap";
function EditPanel({ coms }: any): React.ReactElement {
    console.log('zhelii不可能是空的', coms);

    function handleEditItems(coms: any) {
        return Object.keys(coms.status).map((key: string) => {
            const comName = coms.status[key].name;
            const EditComponent = nameToEditorComMap[comName];

            if (coms.status[key].isShow) {
                return (
                    <div key={key}>
                        <EditComponent configKey={key} configs={coms.status[key]} />
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