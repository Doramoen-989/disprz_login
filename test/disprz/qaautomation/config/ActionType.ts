/**
 * The supported action types we can have on actionable elements
 */
export enum ActionType {
    Click,

    Type,

    VerifyText,

    VerifyElementIsDisplayed,

    VerifyValue,

    VerifyElementIsNotDisplayed,

    ClearAndType,

    ReturnText,

    SelectAllClearAndType,

    MouseHover,

    MouseHoverAndClick
}
