import MaterialsHeader from "@/components/QnComponents/Common/MaterialsHeader"
import { updateCurrentCom } from "@/store/comsSlice";
import { IComponentHeader } from "@/types/componentsType";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";

function SinglePicSelect({ status }: any) {

  const outletContext: IComponentHeader = useOutletContext() || status;
  const { title, desc, options, position, titleSize, descSize, titleWeight, descWeight, titleItalic, descItalic, titleColor, descColor } = outletContext
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(updateCurrentCom("single-pic-select"))
  }, [])

  return (
    <div className={position.currentStatus === 0 ? "" : "text-center"}>
      <MaterialsHeader
        title={title.status}
        desc={desc.status}
        titleSize={titleSize.status[titleSize.currentStatus]}
        descSize={descSize.status[descSize.currentStatus]}
        titleWeight={titleWeight.currentStatus}
        descWeight={descWeight.currentStatus}
        titleItalic={titleItalic.currentStatus}
        descItalic={descItalic.currentStatus}
        titleColor={titleColor.status}
        descColor={descColor.status}
      />
      单选图片
    </div>
  )
}

export default SinglePicSelect