import { ElMessage } from 'element-plus'

export const Ms1 = (str) => {
    ElMessage(str)
}
export const MsSuccess = (str) => {
    ElMessage({
        message: str,
        type: 'success',
    })
}
export const MsWarning = (str) => {
    ElMessage({
        message: str,
        type: 'warning',
    })
}
export const MsError = (str) => {
    ElMessage.error(str)
}