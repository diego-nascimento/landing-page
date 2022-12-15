import {
  BelowMenu,
  FullWidthContainer,
  ModuleWrapper,
  NotFullWidthContainer,
} from '@/shared';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <ModuleWrapper>
      <BelowMenu>
        <FullWidthContainer>
          <NotFullWidthContainer>
            <div className="w-full   mt-10">
              <div className="w-full flex justify-center flex-col items-center">
                {children}
              </div>
            </div>
          </NotFullWidthContainer>
        </FullWidthContainer>
      </BelowMenu>
    </ModuleWrapper>
  );
};
