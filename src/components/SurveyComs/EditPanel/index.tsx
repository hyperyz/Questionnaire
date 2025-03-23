import React from "react"
import styles from "./index.module.scss"

function EditPanel({ coms }: any): React.ReactElement {

    function handleEditItems(coms: any) {
        return Object.keys(coms.status).map((key: string) => {
            const EditComponent = coms.status[key].editCom;
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