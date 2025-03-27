import MaterialsHeader from "@/components/QnComponents/Common/MaterialsHeader";
import { IComponentHeader } from "@/types/componentsType";
import { useOutletContext } from "react-router-dom";
import useChangeCurrentCom from "@/utils/hooks/useChangeCurrentCom";

function MultiPicSelect({ status }: any) {
  const outletContext: IComponentHeader = useOutletContext() || status;
  const { title, desc, options, position, titleSize, descSize, titleWeight, descWeight, titleItalic, descItalic, titleColor, descColor } = outletContext

  useChangeCurrentCom()

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
      图片多选
    </div>
  )
}

export default MultiPicSelect