
interface UIPage{
    var name();

    Map<NonActionableElement> nonActionableElements();

    Map<ActionableElement> actionableElements();

    public interface NonActionableElement{
        DisprzComponentType disprzComponentType();

        var xpath();
    }

    public interface ActionableElement extends NonActionableElement {
        ActionType action();
    }
}