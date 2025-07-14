import * as React from "react";
import {
  Chart as ChartPrimitive,
  ChartTooltip as ChartTooltipPrimitive,
  ChartTooltipContent as ChartTooltipContentPrimitive,
  ChartLegend as ChartLegendPrimitive,
  ChartLegendContent as ChartLegendContentPrimitive,
  ChartContainer as ChartContainerPrimitive,
} from "recharts";

import { cn } from "@/lib/utils";

const ChartContext = React.createContext(null);

function Chart({ config, className, children }) {
  const newChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ChartTooltip) {
      return React.cloneElement(child, {
        content: React.createElement(ChartTooltipContent, { config }),
      });
    }
    if (React.isValidElement(child) && child.type === ChartLegend) {
      return React.cloneElement(child, {
        content: React.createElement(ChartLegendContent, { config }),
      });
    }
    return child;
  });

  return (
    <ChartContext.Provider value={{ config }}>
      <ChartPrimitive className={cn("h-[400px] w-full", className)}>
        {newChildren}
      </ChartPrimitive>
    </ChartContext.Provider>
  );
}

const ChartContainer = React.forwardRef(({ className, ...props }, ref) => (
  <ChartContainerPrimitive
    ref={ref}
    className={cn("flex h-[400px] w-full", className)}
    {...props} />
));
ChartContainer.displayName = "ChartContainer";

const ChartTooltip = ChartTooltipPrimitive;

const ChartTooltipContent = React.forwardRef(({ className, viewBox, hideLabel = false, hideIndicator = false, children, config, ...props }, ref) => {
  const { config: contextConfig } = React.useContext(ChartContext);
  const chartConfig = config || contextConfig;

  return (
    <ChartTooltipContentPrimitive
      ref={ref}
      hideLabel={hideLabel}
      hideIndicator={hideIndicator}
      className={cn(
        "rounded-md border border-muted bg-white px-2 py-1 text-sm shadow-md",
        className
      )}
      formatter={(value, name) => {
        const formattedValue = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value);
        return (
          <span
            className={cn(
              "inline-flex items-center",
              chartConfig[name]?.color
            )}
          >
            {chartConfig[name]?.icon &&
              React.createElement(chartConfig[name].icon, {
                className: "mr-1 h-3 w-3",
              })}
            {formattedValue}
          </span>
        );
      }}
      {...props}>
      {children}
    </ChartTooltipContentPrimitive>
  );
});
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = ChartLegendPrimitive;

const ChartLegendContent = React.forwardRef(({ className, children, config, ...props }, ref) => {
  const { config: contextConfig } = React.useContext(ChartContext);
  const chartConfig = config || contextConfig;

  return (
    <ChartLegendContentPrimitive
      ref={ref}
      className={cn(
        "flex flex-wrap items-center justify-center gap-4",
        className
      )}
      {...props}>
      {chartConfig
        ? Object.entries(chartConfig).map(([key, item]) => (
          <div
            key={key}
            className={cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3",
              item.color
            )}
          >
            {item.icon && React.createElement(item.icon)}
            <span>{item.label}</span>
          </div>
        ))
        : children}
    </ChartLegendContentPrimitive>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

export {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};