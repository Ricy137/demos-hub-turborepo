import React from "react";
import CustomScrollbar from "custom-react-scrollbar";

class ErrorBoundary extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: String(error),
      errorInfo: String(errorInfo?.componentStack),
    });
  }

  render() {
    if ((this.state as any).hasError) {
      return (
        <div className="pt-[80px]">
          {/* <img src={ErrorIcon} alt="error" className="w-[68px] h-[68px] mx-auto mb-[16px]" /> */}
          <h1 className="text-center text-[28px] text-[#E15C56] font-semibold">
            Unfortunately, some unexpected errors occurred!
          </h1>
          <h2 className="text-center text-[20px] text-[#808BE7] font-semibold">
            You can resume using confluxhub by refreshing the page.
          </h2>

          {this.state.error && (
            <>
              <h3 className="mt-[40px] mb-[12px] text-center text-[18px] text-grey-normal font-semibold">
                And we hope you can recall the operation steps and send the
                following error message to the official channel together.
              </h3>
              <CustomScrollbar className="p-[24px] border-4 border-red-300 rounded-lg max-w-[80vw] text-[16px] leading-[18px] text-[#3D3F4C]">
                {this.state.error && (
                  <p className="mb-[12px]">{this.state.error}</p>
                )}
                {this.state.errorInfo && (
                  <pre className="">{this.state.errorInfo}</pre>
                )}
              </CustomScrollbar>
            </>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
